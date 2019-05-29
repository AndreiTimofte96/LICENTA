import {
  GET_HOMEPAGE_PENDING,
  GET_HOMEPAGE_SUCCESS,
  GET_HOMEPAGE_ERROR,
} from './constants';

import {
  homepageService_get,
} from './services';

export function getHomepage() {
  return (dispatch) => {
    dispatch(getHomepagePending(true));
    homepageService_get().then((response) => {
      dispatch(getHomepageSuccess(response.data));
      dispatch(getHomepagePending(false));
    }).catch((error) => {
      dispatch(getHomepageError(error.response.data));
      dispatch(getHomepagePending(false));
    });
  };
}

const getHomepagePending = (status) => ({
  type: GET_HOMEPAGE_PENDING,
  isPending: status,
});

const getHomepageSuccess = (data) => ({
  type: GET_HOMEPAGE_SUCCESS,
  isSuccess: true,
  payload: data.homepage,
});

const getHomepageError = (error) => ({
  type: GET_HOMEPAGE_ERROR,
  isError: true,
  errorMessage: error.message,
});

