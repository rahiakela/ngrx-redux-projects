import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFeatureStoreModule } from './my-feature-store/my-feature-store.module';
import { LoginStoreModule } from './login-store/login-store.module';

@NgModule({
  imports: [
    CommonModule,
    MyFeatureStoreModule,
    LoginStoreModule
  ],
  declarations: []
})
export class RootStoreModule { }
