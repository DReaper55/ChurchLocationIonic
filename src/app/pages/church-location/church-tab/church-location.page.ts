import { Component, OnInit } from "@angular/core";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { Geolocation, Geoposition } from "@ionic-native/geolocation/ngx";

import {
  Environment,
  GoogleMap,
  GoogleMapOptions,
  GoogleMaps,
  GoogleMapsEvent,
  LatLng,
  LocationService,
  Marker,
  MyLocation,
} from "@ionic-native/google-maps";
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
import { AlertController } from "@ionic/angular";
import { ChurchModel } from "../church-model/church-model";
import { ChurchDistance } from "../church-model/church.distance-model";
import { ChurchLocationService } from "../church-service/church-location.service";

@Component({
  selector: "app-church-location",
  templateUrl: "./church-location.page.html",
  styleUrls: ["./church-location.page.scss"],
})
export class ChurchLocationPage implements OnInit {
  map: GoogleMap;

  isPermissionGranted: boolean;
  currentLat: number;
  currentLng: number;

  churchesList: ChurchModel[] = [];
  churchDistanceList: ChurchDistance[] = [];
  churchDistance: number[] = [];
  nearestChurch: ChurchDistance;

  defaultLatLng: LatLng = new LatLng(7.84785389917, 20.9803605602);
  isMarkerVisible: boolean = false;

  ionleftPage: boolean = false;

  counter: number = 0;

  constructor(
    private androidPermission: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy,
    private churchService: ChurchLocationService,
    private alertCntr: AlertController
  ) {}

  ngOnInit(): void {
    this.loadMap();
  }

  ionViewDidEnter() {
    this.counter += 1;

    this.ionleftPage = false;
  }

  loadMap() {
    // This code is necessary for browser
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: "AIzaSyCu6M1IXypmBS-HJ6sye-FKMVRQvLRfBSE",
      API_KEY_FOR_BROWSER_DEBUG: "AIzaSyCu6M1IXypmBS-HJ6sye-FKMVRQvLRfBSE",
    });

    // confirm and update permission status
    LocationService.hasPermission().then((result) => {
      if (result === true) {
        this.isPermissionGranted = result;
      } else {
        (this.isPermissionGranted = result), this.confirmPermissionStatus();
        console.log(this.isPermissionGranted);
      }
    });

    // set google maps options and create instance
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: this.defaultLatLng,
        zoom: 15,
      },
    };

    this.map = GoogleMaps.create("map_canvas", mapOptions);
    this.map.setMyLocationEnabled(true);
    this.map.setMyLocationButtonEnabled(false);
    this.map.setCompassEnabled(true);

    this.animateCamera();

    this.map
      .addEventListener(GoogleMapsEvent.MAP_READY)
      .subscribe(() => {
        if(this.counter === 1 && this.ionleftPage === false){
          setTimeout(async () => await this.showDialog(), 7000)
        }

        this.getNearestChurch()
      });

    // update position
    if (this.map !== undefined) {
      this.geolocation.watchPosition().subscribe(() => {
        if (this.isMarkerVisible === false) {
          if (this.ionleftPage === false) {
            this.animateCamera();
          }
        }
      });
    }
  }

  async showDialog() {
    const alertDialog = await this.alertCntr.create({
      header: "Church Location",
      message: "Find the nearest church?",
      buttons: [
        {
          text: "NO",
          role: "cancel",
        },
        {
          text: "YES",
          handler: () => this.showNearestChurch(),
        },
      ],
    });

    await alertDialog.present();
  }

  animateCamera() {
    LocationService.hasPermission().then((permission) => {
      if (permission === true) {
        LocationService.getMyLocation().then((myLocation: MyLocation) => {
          this.currentLat = myLocation.latLng.lat;
          this.currentLng = myLocation.latLng.lng;

          console.log(this.currentLat);

          this.map.animateCamera({
            target: myLocation.latLng,
            padding: 0,
            zoom: 15,
          });
        });
      }
    });
  }

  showNearestChurch() {
    if (this.map !== undefined && this.map !== null) {
      if (this.nearestChurch !== undefined) {
        this.map.addMarkerSync({
          position: {
            lat: this.nearestChurch.churchLat,
            lng: this.nearestChurch.churchLng,
          },
          animation: "DROP",
          title: this.nearestChurch.churchName,
        });

        this.isMarkerVisible = true;
      }

      this.map.animateCamera({
        target: {
          lat: this.nearestChurch.churchLat,
          lng: this.nearestChurch.churchLng,
        },
        zoom: 15,
      });
    }
  }

  getNearestChurch() {
    this.churchService.getChurches().subscribe((churches) => {
      this.churchesList = churches;

      if (this.currentLat !== undefined && this.currentLng !== undefined) {
        this.churchesList.forEach((church: ChurchModel) => {
          let result: number = this.getDistanceBetweenLatLng(
            this.currentLat,
            this.currentLng,
            church.churchLat,
            church.churchLng
          );

          this.churchDistanceList.push(
            new ChurchDistance(
              church.churchName,
              result,
              church.churchLat,
              church.churchLng
            )
          );

          this.churchDistance.push(result);
        });
      }

      this.getShortestDistance();
    });
  }

  getShortestDistance() {
    this.churchDistance.sort((n1, n2) => n1 - n2);

    let smallest: number = this.churchDistance[0];
    let churchName: string = "";

    this.churchDistanceList.forEach((church) => {
      if (church.distance === smallest) {
        churchName = church.churchName;

        this.nearestChurch = church;
      }
    });

    console.log("New list: ", [this.churchDistance]);
    console.log("Nearest: ", this.nearestChurch);
  }

  getDistanceBetweenLatLng(
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
  ): number {
    let R: number = 6371; // Radius of the earth in km
    let dLat: number = this.deg2rad(lat2 - lat1); // deg2rad below
    let dLon: number = this.deg2rad(lng2 - lng1);
    let a: number =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    let c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d: number = R * c; // Distance in km
    return d;
  }

  deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  confirmPermissionStatus() {
    this.androidPermission
      .checkPermission(this.androidPermission.PERMISSION.ACCESS_FINE_LOCATION)
      .then(
        (result) => {
          console.log("Has permission? " + result.hasPermission);
          if (result.hasPermission === false) {
            this.androidPermission
              .requestPermission(
                this.androidPermission.PERMISSION.ACCESS_FINE_LOCATION
              )
              .then(
                (onfulfilled) =>
                  (this.isPermissionGranted = onfulfilled.hasPermission)
              );
          }
        },
        (err) =>
          this.androidPermission
            .requestPermission(
              this.androidPermission.PERMISSION.ACCESS_FINE_LOCATION
            )
            .then(
              (onfulfilled) =>
                (this.isPermissionGranted = onfulfilled.hasPermission)
            )
      );

    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        this.locationAccuracy
          .request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
          .then(
            () => console.log("Request successful"),
            (error) =>
              console.log("Error requesting location permissions", error)
          );
      }
    });

    LocationService.hasPermission().then((result) => {
      console.log(this.isPermissionGranted);
      if (result === true) {
        this.isPermissionGranted = true;
        this.loadMap();
      } else {
        this.isPermissionGranted = false;
      }
    });
  }

  ionViewDidLeave() {
    console.log("Left page");
    this.ionleftPage = true;
  }
}
