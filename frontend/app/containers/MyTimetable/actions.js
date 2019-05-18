import { GET_TIMETABLE_PENDING, GET_TIMETABLE_SUCCESS, GET_TIMETABLE_ERROR } from './constants';
import { timetableService_get } from './services';


export function getTimetableData(month, year) {
  return (dispatch) => {
    dispatch(getTimetablePending(true));
    timetableService_get(month, year).then((response) => {
      dispatch(getTimetableSuccess(response.data.timetable));
      dispatch(getTimetablePending(false));
    }).catch((error) => {
      console.log('!!!!!!', error.response.data); //eslint-disable-line
      dispatch(getTimetableError(error.response.data));
    });
  };
}

const getTimetablePending = (status) => ({
  type: GET_TIMETABLE_PENDING,
  isPending: status,
});

const getTimetableSuccess = (payload) => ({
  type: GET_TIMETABLE_SUCCESS,
  isSuccess: true,
  payload,
});

const getTimetableError = (error) => ({
  type: GET_TIMETABLE_ERROR,
  isError: true,
  errorMessage: error.message,
});
