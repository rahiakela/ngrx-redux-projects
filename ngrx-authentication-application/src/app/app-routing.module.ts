import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule' // lazy load the users module
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/users/my-account'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) //  base application routing
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
