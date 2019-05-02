import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeUsername } from './selectors';
import Header from './Header';

const mapStateToProps = createStructuredSelector({
  username: makeUsername(),
});

export default connect(mapStateToProps, null)(Header);
