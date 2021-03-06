import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkforcePageRoutingModule } from './workforce-routing.module';

import { WorkforcePage } from './workforce.page';
import { MenuModule } from '../../components/menu/menu.module';
import { RouterModule } from '@angular/router';

import { CalendarModule } from 'ion2-calendar';
import { WorkercardModule } from 'src/app/components/workercard/workercard.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuModule,
    RouterModule,
    CalendarModule,
    WorkercardModule,
    WorkforcePageRoutingModule,
  ],
  declarations: [WorkforcePage],
})
export class WorkforcePageModule {}
