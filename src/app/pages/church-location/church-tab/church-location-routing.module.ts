import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChurchLocationPage } from './church-location.page';

const routes: Routes = [
  {
    path: '',
    component: ChurchLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChurchLocationPageRoutingModule {}
