import { GET_TIMETABLE_PENDING, GET_TIMETABLE_SUCCESS, GET_TIMETABLE_ERROR } from './constants';
// The initial state of the App
const initialState = {
  timetableData: null,
  isPending: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

function myTimetableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TIMETABLE_PENDING:
      return {
        ...state,
        isPending: action.isPending,
      };
    case GET_TIMETABLE_SUCCESS:
      return {
        ...state,
        isSuccess: action.isSuccess,
        timetableData: action.payload,
      };
    case GET_TIMETABLE_ERROR:
      return {
        ...state,
        isError: action.isError,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}

export default myTimetableReducer;
