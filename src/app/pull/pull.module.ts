import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PullPageRoutingModule } from './pull-routing.module';

import { PullPage } from './pull.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PullPageRoutingModule
  ],
  declarations: [PullPage]
})
export class PullPageModule {}
