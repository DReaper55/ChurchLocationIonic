import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchChurchPageRoutingModule } from './search-church-routing.module';

import { SearchChurchPage } from './search-church.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchChurchPageRoutingModule
  ],
  declarations: [SearchChurchPage]
})
export class SearchChurchPageModule {}
