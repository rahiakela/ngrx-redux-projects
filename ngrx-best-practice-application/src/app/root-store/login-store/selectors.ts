import { State } from './state';
import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../models';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getUser = (state: State): any => state.user;

export const selectLoginState: MemoizedSelector<object, State> = createFeatureSelector(
  'login'
);

export const selectLoginError: MemoizedSelector<object, any> = createSelector(
  selectLoginState,
  getError
);

export const selectLoginIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectLoginState,
  getIsLoading
);

export const selectLoggedInUser: MemoizedSelector<object, User> = createSelector(
  selectLoginState,
  getUser
);
