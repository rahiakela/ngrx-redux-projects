import {Injectable} from '@angular/core';
import {DataService} from '../../services/data.service';
import {of as observableOf, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import { Actions, Effect, ofType} from '@ngrx/effects';
import * as featureActions from './actions';
import {startWith, switchMap, map, catchError} from 'rxjs/operators';

@Injectable()
export class MyFeatureStoreEffects  {

  constructor(private dataService: DataService, private action$: Actions) {}


  @Effect()
  loadRequestEffect$: Observable<Action> = this.action$.pipe(
    ofType<featureActions.LoadRequestAction>(featureActions.ActionTypes.LOAD_REQUEST),
    startWith(new featureActions.LoadRequestAction()),
    switchMap(
      action => this.dataService
        .getItems()
        .pipe(
          map(items => new featureActions.LoadSuccessAction({items})),
          catchError(error => observableOf(new featureActions.LoadFailureAction({error})))
        )
    )
  );
}
