import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { getUserPreferences, putUserPreferences, putNewPassword } from './actions';
import {
  makeIsPending, makeIsSuccess, makeUserPreferences,
  makeUserData, makeChangePasswordMessage, makeIsError,
  makePreferencesSetMessage, makeIsPreferenceSetPending,
  makeIsPreferenceSetError, makeIsPreferenceSetSuccess,
  makeIsPasswordSetPending, makeIsPasswordSetError, 
  makeIsPasswordSetSuccess,
} from './selectors';
import reducer from './reducer';
import MyProfile from './MyProfile';

const mapDispatchToProps = (dispatch) => ({
  getUserPreferences: () => getUserPreferences()(dispatch),
  putPreferences: (object) => putUserPreferences(object)(dispatch),
  putNewPassword: (password, newPassword) => putNewPassword(password, newPassword)(dispatch),
});

const mapStateToProps = createStructuredSelector({
  isPending: makeIsPending(),
  isSuccess: makeIsSuccess(),
  isError: makeIsError(),
  userPreferences: makeUserPreferences(),
  userData: makeUserData(),
  changePasswordMessage: makeChangePasswordMessage(),
  preferencesSetMessage: makePreferencesSetMessage(),
  isPreferenceSetPending: makeIsPreferenceSetPending(),
  isPreferenceSetError: makeIsPreferenceSetError(),
  isPreferenceSetSuccess: makeIsPreferenceSetSuccess(),
  isPasswordSetPending: makeIsPasswordSetPending(),
  isPasswordSetError: makeIsPasswordSetError(),
  isPasswordSetSuccess: makeIsPasswordSetSuccess(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'myProfile', reducer });

export default compose(withReducer, withConnect)(MyProfile);
