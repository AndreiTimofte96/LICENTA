import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { homepageGet } from './actions';
import { makeIsPending } from './selectors';
import reducer from './reducer';
import Blog from './Blog';

const mapDispatchToProps = (dispatch) => ({
  homepageGet: () => homepageGet()(dispatch),
});

const mapStateToProps = createStructuredSelector({
  isPending: makeIsPending(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'blog', reducer });

export default compose(withReducer, withConnect)(Blog);
