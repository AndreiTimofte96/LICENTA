import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { makeIsPending, makeIsSuccess, makeMessage } from './selectors';
import reducer from './reducer';
import MyProfile from './MyProfile';

const mapDispatchToProps = () => ({
});

const mapStateToProps = createStructuredSelector({
  isPending: makeIsPending(),
  isSuccess: makeIsSuccess(),
  message: makeMessage(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'myprofile', reducer });

export default compose(withReducer, withConnect)(MyProfile);
