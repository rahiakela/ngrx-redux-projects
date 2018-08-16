import { Injectable } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable, of as observableOf } from 'rxjs';
import { Action } from '@ngrx/store';
import { ofType, Effect, Actions } from '@ngrx/effects';
import * as loginActions from './actions';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class LoginEffects {
  constructor(private dataService: DataService, private actions$: Actions) {}

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<loginActions.LoginRequestAction>(loginActions.ActionTypes.LOGIN_REQUEST),
    switchMap(action =>
      this.dataService.loginUser(action.payload.userName, action.payload.password).pipe(
        map(user => new loginActions.LoginSuccessAction({ user })),
        catchError(error => observableOf(new loginActions.LoginFailureAction({ error })))
      )
    )
  );
}
