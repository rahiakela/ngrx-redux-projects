import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account/my-account.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {UsersRoutingModule} from './users-routing.module';

// components constant
const components = [
  MyAccountComponent,
  SignInComponent,
  SignUpComponent,
  SignOutComponent
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    ReactiveFormsModule,
    RouterModule,
    UsersRoutingModule
  ],
  declarations: components,
  exports: components
})
export class UsersModule { }
