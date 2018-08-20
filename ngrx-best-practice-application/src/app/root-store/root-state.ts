import { MyFeatureStoreState } from './my-feature-store';
import { LoginStoreState } from './login-store';

export interface State {
  myFeature: MyFeatureStoreState.State;
  loginFeature: LoginStoreState.State;
}
