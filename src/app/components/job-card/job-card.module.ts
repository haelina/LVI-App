import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from './job-card.component';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@NgModule({
  declarations: [JobCardComponent],
  imports: [CommonModule],
  providers: [CallNumber],
  exports: [JobCardComponent],
})
export class JobCardModule {}
