import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HymnsPage } from './hymns.page';

const routes: Routes = [
  {
    path: '',
    component: HymnsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HymnsPageRoutingModule {}
