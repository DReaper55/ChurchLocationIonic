import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HostListener } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  screenHeight: number;
  screenWidth: number;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

    this.getScreenSize();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByName('blue');
    });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?){
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          console.log(this.screenHeight, this.screenWidth);
  }
  
}
