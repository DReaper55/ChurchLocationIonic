import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HymnSongPage } from './hymn-song.page';

const routes: Routes = [
  {
    path: '',
    component: HymnSongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HymnSongPageRoutingModule {}
