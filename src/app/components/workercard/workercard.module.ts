import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkercardComponent } from './workercard.component';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@NgModule({
  declarations: [WorkercardComponent],
  imports: [CommonModule],
  exports: [WorkercardComponent],
  providers: [CallNumber],
})
export class WorkercardModule {}
