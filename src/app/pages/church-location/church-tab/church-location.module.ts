import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChurchLocationPageRoutingModule } from './church-location-routing.module';

import { ChurchLocationPage } from './church-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChurchLocationPageRoutingModule
  ],
  declarations: [ChurchLocationPage]
})
export class ChurchLocationPageModule {}
