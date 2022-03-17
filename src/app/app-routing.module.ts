import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToMypage = () => redirectLoggedInTo(['mypage']);

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
    ...canActivate(redirectLoggedInToMypage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'workforce',
    loadChildren: () =>
      import('./pages/workforce/workforce.module').then(
        (m) => m.WorkforcePageModule
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'jobs',
    loadChildren: () =>
      import('./pages/jobs/jobs.module').then((m) => m.JobsPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
    ...canActivate(redirectLoggedInToMypage),
  },
  {
    path: 'mypage',
    loadChildren: () =>
      import('./pages/mypage/mypage.module').then((m) => m.MypagePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'trainees',
    loadChildren: () =>
      import('./pages/trainees/trainees.module').then(
        (m) => m.TraineesPageModule
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'addnew',
    loadChildren: () =>
      import('./pages/addnew/addnew.module').then((m) => m.AddnewPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'modify-job',
    loadChildren: () => import('./pages/modify-job/modify-job.module').then( m => m.ModifyJobPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
