import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
} from './constants';

function checkSessionReducer(state = {
  authenticated: 'not_checked',
}, action) {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: true, userData: action.userData };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default checkSessionReducer;
