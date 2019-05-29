import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { getHomepage } from './actions';
import { makeIsPending, makeIsSuccess, makeHomepage } from './selectors';
import reducer from './reducer';
import Homepage from './Homepage';

const mapDispatchToProps = (dispatch) => ({
  getHomepage: () => getHomepage()(dispatch),
});

const mapStateToProps = createStructuredSelector({
  isPending: makeIsPending(),
  isSuccess: makeIsSuccess(),
  homepage: makeHomepage(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homepage', reducer });

export default compose(withReducer, withConnect)(Homepage);
