import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HymnsService } from '../hymns-service/hymns.service';


@Component({
    selector: 'app-hymns',
    templateUrl: './hymns.page.html',
    styleUrls: ['./hymns.page.scss']
  })

  export class HymnsPage implements OnInit{
      hymnSongs : Observable<any>[] = [];

      constructor(private hymnsService : HymnsService){}

    ngOnInit() {
        console.log("Something usefull")
        console.log("More usefull")

        // console.log(this.hymnsService.getHymnSongs())
        
        // this.hymnSongs = this.hymnsService.getHymnSongs();
        // this.hymnSongs.forEach(hymn => console.log(hymn['title']));

        this.hymnsService.loadHymnSongs().subscribe(hymnSong => {
          this.hymnSongs = hymnSong['songs'];
        });
        
    }
      
  }