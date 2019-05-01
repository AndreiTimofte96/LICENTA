import { AUTHENTICATED, AUTHENTICATION_ERROR } from './constants';
import { checkSession_get } from './services';

// const paths = [
//   '/blog',
// ];

export function checkSession() {
  const token = localStorage.getItem('ntm-token');
  if (token !== null) {
    return (dispatch) => {
      checkSession_get(token)
        .then((response) => {
          if (response.status === 200) {
            const userData = response.data.user;
            dispatch(checkTokenSuccess(userData));
          } else {
            localStorage.removeItem('ntm-token');
            window.location.replace('/');
            dispatch(checkTokenError());
          }
        })
        .catch((error) => {
          if (error.response.status === 403) {
            localStorage.removeItem('ntm-token');
            window.location.replace('/');
            dispatch(checkTokenError());
          }
        });
    };
  }
  return (dispatch) => {
    localStorage.removeItem('ntm-token');
    window.location.replace('/');
    dispatch(checkTokenError());
  };
}

const checkTokenSuccess = (userData) => ({
  type: AUTHENTICATED,
  userData,
});

const checkTokenError = () => ({
  type: AUTHENTICATION_ERROR,
  payload: 'There is a problem with your token',
});
