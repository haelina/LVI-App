import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraineesPageRoutingModule } from './trainees-routing.module';

import { TraineesPage } from './trainees.page';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../../components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    MenuModule,
    TraineesPageRoutingModule,
  ],
  declarations: [TraineesPage],
})
export class TraineesPageModule {}
