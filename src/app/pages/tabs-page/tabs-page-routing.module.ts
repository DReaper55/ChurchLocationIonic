import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';

import { TabsPagePage } from './tabs-page.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPagePage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            component: HomePage
          }
        ]
      },
      {
        path: 'hymns',
        children: [
          {
            path: '',
            loadChildren: ()=>import('../hymns/hymns-tab/hymns.module').then(m=>m.HymnsPageModule)
          },
          
        ]
      },
      {
        path: 'church-location',
        children: [
          {
            path: '',
            loadChildren: ()=>import('../church-location/church-tab/church-location.module').then(m=>m.ChurchLocationPageModule)
          },
          
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPagePageRoutingModule {}
