import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewPageRoutingModule } from './addnew-routing.module';

import { AddnewPage } from './addnew.page';

import { RouterModule } from '@angular/router';
import { MenuModule } from '../../components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
    MenuModule,
    AddnewPageRoutingModule,
  ],
  declarations: [AddnewPage],
})
export class AddnewPageModule {}
