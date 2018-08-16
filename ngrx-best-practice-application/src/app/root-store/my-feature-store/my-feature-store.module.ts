import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { featureReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { MyFeatureStoreEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('myFeature', featureReducer),
    EffectsModule.forFeature([MyFeatureStoreEffects]),
  ],
  declarations: [],
  providers: [MyFeatureStoreEffects],
})
export class MyFeatureStoreModule {}
