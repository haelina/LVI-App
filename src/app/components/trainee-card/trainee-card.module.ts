import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraineeCardComponent } from './trainee-card.component';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@NgModule({
  declarations: [TraineeCardComponent],
  imports: [CommonModule],
  exports: [TraineeCardComponent],
  providers: [CallNumber],
})
export class TraineeCardModule {}
