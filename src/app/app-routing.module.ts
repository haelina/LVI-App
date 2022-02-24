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
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'mypage',
    loadChildren: () => import('./pages/mypage/mypage.module').then( m => m.MypagePageModule)
  },
  {
    path: 'trainees',
    loadChildren: () => import('./pages/trainees/trainees.module').then( m => m.TraineesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
