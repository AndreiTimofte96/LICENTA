import {
  GET_USER_PREFERENCES_PENDING,
  GET_USER_PREFERENCES_SUCCESS,
  GET_USER_PREFERENCES_ERROR,
} from './constants';

// The initial state of the App
const initialState = {
  userPreferences: {},
  isPending: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_PREFERENCES_PENDING:
      return {
        ...state,
        isPending: action.isPending,
      };
    case GET_USER_PREFERENCES_SUCCESS:
      return {
        ...state,
        isSuccess: action.isSuccess,
        userPreferences: action.payload,
      };
    case GET_USER_PREFERENCES_ERROR:
      return {
        ...state,
        isError: action.isError,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}
export default profileReducer;
