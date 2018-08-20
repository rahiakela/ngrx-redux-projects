import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  RootStoreState,
  MyFeatureStoreSelectors,
  MyFeatureStoreActions,
} from '../../root-store';
import { Observable } from 'rxjs';
import { MyModel } from '../../models';

@Component({
  selector: 'app-my-feature',
  templateUrl: './my-feature.component.html',
  styleUrls: ['./my-feature.component.css'],
})
export class MyFeatureComponent implements OnInit {
  myFeatureItems$: Observable<MyModel[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.myFeatureItems$ = this.store$.select(
      MyFeatureStoreSelectors.selectAllMyFeatureItems
    );

    this.error$ = this.store$.select(MyFeatureStoreSelectors.selectMyFeatureError);

    this.isLoading$ = this.store$.select(
      MyFeatureStoreSelectors.selectMyFeatureIsLoading
    );

    this.store$.dispatch(new MyFeatureStoreActions.LoadRequestAction());
  }
}
