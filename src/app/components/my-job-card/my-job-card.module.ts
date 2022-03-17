import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJobCardComponent } from './my-job-card.component';
import { ModifyJobPageModule } from 'src/app/pages/modify-job/modify-job.module';

@NgModule({
  declarations: [MyJobCardComponent],
  imports: [CommonModule, ModifyJobPageModule],
  exports: [MyJobCardComponent],
})
export class MyJobCardModule {}
