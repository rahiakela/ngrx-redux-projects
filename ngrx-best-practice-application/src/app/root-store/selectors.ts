import { MemoizedSelector, createSelector } from '@ngrx/store';
import { MyFeatureStoreSelectors } from './my-feature-store';
import { LoginStoreSelectors } from './login-store';

// root state level selectors, such as a Loading property, or even an aggregate Error property

export const selectError: MemoizedSelector<object, string> = createSelector(
  MyFeatureStoreSelectors.selectMyFeatureError,
  LoginStoreSelectors.selectLoginError,
  (myFeatureError: string, loginError: string) => {
    return myFeatureError || loginError;
  }
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
  MyFeatureStoreSelectors.selectMyFeatureIsLoading,
  LoginStoreSelectors.selectLoginIsLoading,
  (myFeatureLoding: boolean, loginLoading: boolean) => {
    return myFeatureLoding || loginLoading;
  }
);
