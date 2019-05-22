import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { getUserPreferences, putUserPreferences } from './actions';
import { makeIsPending, makeIsSuccess, makeUserPreferences, makeUserData } from './selectors';
import reducer from './reducer';
import MyProfile from './MyProfile';

const mapDispatchToProps = (dispatch) => ({
  getUserPreferences: () => getUserPreferences()(dispatch),
  putPreferences: (object) => putUserPreferences(object)(dispatch),
});

const mapStateToProps = createStructuredSelector({
  isPending: makeIsPending(),
  isSuccess: makeIsSuccess(),
  userPreferences: makeUserPreferences(),
  userData: makeUserData(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'myProfile', reducer });

export default compose(withReducer, withConnect)(MyProfile);
