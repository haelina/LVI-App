import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyJobPage } from './modify-job.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyJobPageRoutingModule {}
