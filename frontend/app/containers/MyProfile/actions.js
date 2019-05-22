import {
  GET_USER_PREFERENCES_PENDING,
  GET_USER_PREFERENCES_SUCCESS,
  GET_USER_PREFERENCES_ERROR,
} from './constants';
import { userPreferencesService_get, userPreferencesService_put } from './services';

export function getUserPreferences() {
  return (dispatch) => {
    dispatch(getPreferencesPending(true));
    userPreferencesService_get().then((response) => {
      dispatch(getPreferencesSuccess(response.data));
      dispatch(getPreferencesPending(false));
    }).catch((error) => {
      dispatch(getPreferencesError(error.response.data));
      dispatch(getPreferencesPending(false));
    });
  };
}

const getPreferencesPending = (status) => ({
  type: GET_USER_PREFERENCES_PENDING,
  isPending: status,
});

const getPreferencesSuccess = (data) => ({
  type: GET_USER_PREFERENCES_SUCCESS,
  isSuccess: true,
  payload: data.userPreferences,
});

const getPreferencesError = (error) => ({
  type: GET_USER_PREFERENCES_ERROR,
  isError: true,
  errorMessage: error.message,
});


export function putUserPreferences(object) {
  return (dispatch) => {
    dispatch(putPreferencesPending(true));
    userPreferencesService_put(object).then((response) => {
      dispatch(putPreferencesSuccess(response.data));
      dispatch(putPreferencesPending(false));
    }).catch((error) => {
      dispatch(putPreferencesError(error.response.data));
      dispatch(putPreferencesPending(false));
    });
  };
}

const putPreferencesPending = (status) => ({
  type: GET_USER_PREFERENCES_PENDING,
  isPending: status,
});

const putPreferencesSuccess = (data) => ({
  type: GET_USER_PREFERENCES_SUCCESS,
  isSuccess: true,
  payload: data.userPreferences,
});

const putPreferencesError = (error) => ({
  type: GET_USER_PREFERENCES_ERROR,
  isError: true,
  errorMessage: error.message,
});
