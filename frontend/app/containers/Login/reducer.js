import { POST_LOGIN_PENDING, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR } from './constants';
// The initial state of the App
const initialState = {
  message: null,
  isPending: false,
  isSuccess: false,
  isError: false,
  errorMessage: null,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case POST_LOGIN_PENDING:
      return {
        ...state,
        isPending: action.isPending,
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        isSuccess: action.isSuccess,
        message: action.message,
      };
    case POST_LOGIN_ERROR:
      return {
        ...state,
        isError: action.isError,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}

export default loginReducer;
