import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraineesPageRoutingModule } from './trainees-routing.module';

import { TraineesPage } from './trainees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraineesPageRoutingModule
  ],
  declarations: [TraineesPage]
})
export class TraineesPageModule {}
