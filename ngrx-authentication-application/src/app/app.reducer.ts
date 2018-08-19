import {Action, ActionReducer, combineReducers, compose} from '@ngrx/store';
import {RouterState} from '@angular/router';
import {routerReducer} from '@ngrx/router-store';
import {storeFreeze} from 'ngrx-store-freeze';

/**
 * Every reducer module"s default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as userReducers from './users/user.reducer';

/**
 * We treat each reducer like a table in a database.
 * This means our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  router: RouterState;
  users: userReducers.State;
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const metaReducers = {
  router: routerReducer,
  users: userReducers.reducer
};

// development reducer includes storeFreeze to prevent state from being mutated
const developmentReducer: ActionReducer<State, Action> = compose(storeFreeze, combineReducers)(metaReducers);
// production reducer
const productionReducer: ActionReducer<State, Action> = combineReducers(metaReducers);

export const initialState: State = {

};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
