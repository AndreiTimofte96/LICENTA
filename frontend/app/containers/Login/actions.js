import { GET_HOMEPAGE_SUCCESS, GET_HOMEPAGE_PENDING } from './constants';
import { homepageService_get } from '../../utils/services/services';

export function homepageGet() {
  return (dispatch) => {
    dispatch({
      type: GET_HOMEPAGE_PENDING,
      isPending: true,
    });
    homepageService_get().then((response) => {
      dispatch({
        type: GET_HOMEPAGE_PENDING,
        isPending: false,
      });
      dispatch({
        type: GET_HOMEPAGE_SUCCESS,
        isSuccess: true,
        message: response.data.message,
      });
    }).catch((error) => {
      console.log('!!!!!!', error); //eslint-disable-line
    });
  };
}
