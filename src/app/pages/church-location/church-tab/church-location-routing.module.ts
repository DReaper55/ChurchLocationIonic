import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChurchLocationPage } from './church-location.page';

const routes: Routes = [
  {
    path: '',
    component: ChurchLocationPage
  },
  {
    path: 'search-church',
    loadChildren: () => import('../search-church/search-church.module').then( m => m.SearchChurchPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChurchLocationPageRoutingModule {}
