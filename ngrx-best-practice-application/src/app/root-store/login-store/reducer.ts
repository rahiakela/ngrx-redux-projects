import { initialState, State } from './state';
import { Actions, ActionTypes } from './actions';

export function loginReducer(state: initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return { ...state, error: null, isLoading: true };

    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, error: null, isLoading: false };

    case ActionTypes.LOGIN_FAILURE:
      return { ...state, error: action.payload.error, isLoading: false };

    default: {
      return state;
    }
  }
}
