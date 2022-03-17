import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyJobPageRoutingModule } from './modify-job-routing.module';

import { ModifyJobPage } from './modify-job.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModifyJobPageRoutingModule,
  ],
  declarations: [ModifyJobPage],
  exports: [ModifyJobPage],
})
export class ModifyJobPageModule {}
