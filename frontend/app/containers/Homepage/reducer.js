import { GET_HOMEPAGE_PENDING, GET_HOMEPAGE_SUCCESS } from './constants';
// The initial state of the App
const initialState = {
  message: null,
  isPending: false,
  isSuccess: false,
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
        message: action.message,
      };
    default:
      return state;
  }
}

export default homepageReducer;
