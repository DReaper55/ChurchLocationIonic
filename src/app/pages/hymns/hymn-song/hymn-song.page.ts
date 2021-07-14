import { HtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HymnsService } from '../hymns-service/hymns.service';

@Component({
  selector: 'app-hymn-song',
  templateUrl: './hymn-song.page.html',
  styleUrls: ['./hymn-song.page.scss'],
})
export class HymnSongPage implements OnInit {
  title: string;
  hymnSong: HtmlTagDefinition;
  hymnSongs : Observable<any>[] = [];

  constructor(private activatedRoute : ActivatedRoute, private hymnsService: HymnsService) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.paramMap.get('hymnId');

    this.hymnsService.loadHymnSongs().subscribe(hymnSongs => {
      this.hymnSongs = hymnSongs['songs'];

      this.hymnSongs.forEach((hymn:any) => {
        if(hymn['title'] === this.title){
          this.hymnSong = hymn['hymnSong'];
          // this.hymnSong = this.hymnSong.replace(/(\n)/g, "<br/>");
          console.log(hymn['hymnSong']);
        }
      });
  
    })

    // this.hymnSongs = this.hymnsService.getHymnSongs();
      }

}
