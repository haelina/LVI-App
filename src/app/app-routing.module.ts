import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WorkforcePageModule } from './workforce/workforce.module';
import { WorkforcePage } from './workforce/workforce.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'workforce',
    loadChildren: () =>
      import('./workforce/workforce.module').then((m) => m.WorkforcePageModule),
  },
  {
    path: 'jobs',
    loadChildren: () =>
      import('./jobs/jobs.module').then((m) => m.JobsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
