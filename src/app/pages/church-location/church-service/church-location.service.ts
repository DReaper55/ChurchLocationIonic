import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChurchModel } from '../church-model/church-model';

@Injectable({
  providedIn: 'root'
})
export class ChurchLocationService {
  churches: ChurchModel[] = [];

  constructor(private http : HttpClient) { }

  getChurches() : Observable<ChurchModel[]> {
      return this.http.get('assets/churches.json')
      .pipe(
        map((data:any) => {
          console.log("More stuff")
          data.forEach(church => {
            this.churches.push(new ChurchModel(
              church.churchName,
              church.pastorName,
              church.address,
              church.state,
              church.country,
              church.about,
              church.number,
              church.disciples,
              church.region,
              church.distance,
              church.churchLat,
              church.churchLng
            ))
          });
          return this.churches;
        })
      )
    }
  }
