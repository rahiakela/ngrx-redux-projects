import { NgModule } from '@angular/core';
import { AuthenticationGuard } from '../shared/authenticated-guard';
import {RouterModule, Routes} from '@angular/router';
import {MyAccountComponent} from './my-account/my-account.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignOutComponent} from './sign-out/sign-out.component';
import {SignUpComponent} from './sign-up/sign-up.component';

const routes: Routes = [
  {
    canActivate: [AuthenticationGuard],
    path: 'my-account',
    component: MyAccountComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-out',
    component: SignOutComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) // application child routing
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
