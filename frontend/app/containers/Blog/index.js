import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { homepageGet } from './actions';
import { makeIsPending, makeIsSuccess, makeMessage } from './selectors';
import reducer from './reducer';
import Blog from './Blog';

const mapDispatchToProps = (dispatch) => ({
  homepageGet: () => homepageGet()(dispatch),
});

const mapStateToProps = createStructuredSelector({
  isPending: makeIsPending(),
  isSuccess: makeIsSuccess(),
  message: makeMessage(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homepage', reducer });

export default compose(withReducer, withConnect)(Blog);
