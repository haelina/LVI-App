import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsPageRoutingModule } from './jobs-routing.module';

import { JobsPage } from './jobs.page';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../../components/menu/menu.module';
import { JobCardModule } from 'src/app/components/job-card/job-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuModule,
    RouterModule,
    JobCardModule,
    JobsPageRoutingModule,
  ],
  declarations: [JobsPage],
})
export class JobsPageModule {}
