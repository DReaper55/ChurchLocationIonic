import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchChurchPage } from './search-church.page';

const routes: Routes = [
  {
    path: '',
    component: SearchChurchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchChurchPageRoutingModule {}
