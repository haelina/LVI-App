import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJobCardComponent } from './my-job-card.component';

@NgModule({
  declarations: [MyJobCardComponent],
  imports: [CommonModule],
  exports: [MyJobCardComponent],
})
export class MyJobCardModule {}
