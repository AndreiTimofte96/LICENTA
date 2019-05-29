import { GET_HOMEPAGE_PENDING, GET_HOMEPAGE_SUCCESS, GET_HOMEPAGE_ERROR } from './constants';
// The initial state of the App
const initialState = {
  message: null,
  homepage: {},
  isPending: false,
  isSuccess: false,
  errorMessage: '',
};

function homepageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOMEPAGE_PENDING:
      return {
        ...state,
        isPending: action.isPending,
      };
    case GET_HOMEPAGE_SUCCESS:
      return {
        ...state,
        isSuccess: action.isSuccess,
        homepage: action.payload,
      };
    case GET_HOMEPAGE_ERROR:
      return {
        ...state,
        isError: action.isError,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}

export default homepageReducer;
