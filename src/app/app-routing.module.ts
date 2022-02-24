import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'workforce',
    loadChildren: () =>
      import('./pages/workforce/workforce.module').then(
        (m) => m.WorkforcePageModule
      ),
  },
  {
    path: 'jobs',
    loadChildren: () =>
      import('./pages/jobs/jobs.module').then((m) => m.JobsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
