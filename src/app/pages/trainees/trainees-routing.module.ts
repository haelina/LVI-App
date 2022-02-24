import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraineesPage } from './trainees.page';

const routes: Routes = [
  {
    path: '',
    component: TraineesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraineesPageRoutingModule {}
