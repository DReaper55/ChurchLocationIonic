import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HymnsPageRoutingModule } from './hymns-routing.module';

import { HymnsPage } from './hymns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HymnsPageRoutingModule
  ],
  declarations: [HymnsPage]
})
export class HymnsPageModule {}
