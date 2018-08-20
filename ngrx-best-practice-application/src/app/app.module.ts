import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store';
import { MyFeatureComponent } from './containers/my-feature/my-feature.component';

@NgModule({
  declarations: [AppComponent, MyFeatureComponent],
  imports: [BrowserModule, RootStoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
