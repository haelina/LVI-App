import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from './job-card.component';

@NgModule({
  declarations: [JobCardComponent],
  imports: [CommonModule],
  exports: [JobCardComponent],
})
export class JobCardModule {}
