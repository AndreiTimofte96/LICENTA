import { POST_LOGIN_PENDING, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR } from './constants';
import { loginService_post } from './services';

export function loginPost(mail, password, history) {
  return (dispatch) => {
    dispatch(postLoginPending(true));
    loginService_post({ mail, password }).then((response) => {
      dispatch(postLoginPending(false));
      dispatch(postLoginSuccess(response));
      const { token } = response.data;
      localStorage.setItem('ntm-token', token);
      history.push('/homepage');
    }).catch((error) => {
      console.log('!!!!!!', error.response.data); //eslint-disable-line
      dispatch(postLoginError(error.response.data));
    });
  };
}

const postLoginPending = (status) => ({
  type: POST_LOGIN_PENDING,
  isPending: status,
});

const postLoginSuccess = () => ({
  type: POST_LOGIN_SUCCESS,
  isSuccess: true,
});

const postLoginError = (error) => ({
  type: POST_LOGIN_ERROR,
  isError: true,
  errorMessage: error.message,
});

