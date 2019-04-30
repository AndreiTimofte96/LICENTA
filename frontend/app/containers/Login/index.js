import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { loginPost } from './actions';
import { makeIsPending, makeIsSuccess } from './selectors';
import reducer from './reducer';
import Login from './Login';

const mapDispatchToProps = (dispatch) => ({
  loginPost: (email, password, history) => loginPost(email, password, history)(dispatch),
});

const mapStateToProps = createStructuredSelector({
  isPending: makeIsPending(),
  isSuccess: makeIsSuccess(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
export default compose(withReducer, withConnect)(Login);
