import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypagePageRoutingModule } from './mypage-routing.module';

import { MypagePage } from './mypage.page';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../../components/menu/menu.module';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    MenuModule,
    ReactiveFormsModule,
    CalendarModule,
    MypagePageRoutingModule,
  ],
  declarations: [MypagePage],
})
export class MypagePageModule {}
