import {
  GET_USER_PREFERENCES_PENDING,
  GET_USER_PREFERENCES_SUCCESS,
  GET_USER_PREFERENCES_ERROR,
  PUT_NEW_PASSWORD_ERROR,
  PUT_NEW_PASSWORD_PENDING,
  PUT_NEW_PASSWORD_SUCCESS,
  PUT_USER_PREFERENCES_ERROR,
  PUT_USER_PREFERENCES_PENDING,
  PUT_USER_PREFERENCES_SUCCESS,
} from './constants';
import {
  userPreferencesService_get,
  userPreferencesService_put,
  newPasswordService_put,
} from './services';

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
  type: PUT_USER_PREFERENCES_PENDING,
  isPending: status,
});

const putPreferencesSuccess = (data) => ({
  type: PUT_USER_PREFERENCES_SUCCESS,
  isSuccess: true,
  payload: data.message,
});

const putPreferencesError = (error) => ({
  type: PUT_USER_PREFERENCES_ERROR,
  isError: true,
  payload: error,
});


export function putNewPassword(password, newPassword) {
  return (dispatch) => {
    dispatch(putNewPasswordPending(true));
    newPasswordService_put({ password, newPassword }).then((response) => {
      dispatch(putNewPasswordSuccess(response.data));
      dispatch(putNewPasswordPending(false));
    }).catch((error) => {
      dispatch(putNewPasswordError(error.response.data));
      dispatch(putNewPasswordPending(false));
    });
  };
}

const putNewPasswordPending = (status) => ({
  type: PUT_NEW_PASSWORD_PENDING,
  isPending: status,
});

const putNewPasswordSuccess = (data) => ({
  type: PUT_NEW_PASSWORD_SUCCESS,
  isSuccess: true,
  payload: data.message,
});

const putNewPasswordError = (error) => ({
  type: PUT_NEW_PASSWORD_ERROR,
  isError: true,
  payload: error,
});
