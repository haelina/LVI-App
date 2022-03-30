import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkercardComponent } from './workercard.component';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  declarations: [WorkercardComponent],
  imports: [CommonModule, CalendarModule],
  exports: [WorkercardComponent],
  providers: [CallNumber],
})
export class WorkercardModule {}
