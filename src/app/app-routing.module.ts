import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then( m => m.TabsPagePageModule)
  },
  {
    path: 'hymns/:hymnId',
    loadChildren: () => import('./pages/hymns/hymn-song/hymn-song.module').then( m => m.HymnSongPageModule)
  },
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
