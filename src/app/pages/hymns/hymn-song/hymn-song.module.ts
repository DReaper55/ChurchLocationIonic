import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HymnSongPageRoutingModule } from './hymn-song-routing.module';

import { HymnSongPage } from './hymn-song.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HymnSongPageRoutingModule
  ],
  declarations: [HymnSongPage]
})
export class HymnSongPageModule {}
