import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeUsername, makePictureUrl } from './selectors';
import Header from './Header';

const mapStateToProps = createStructuredSelector({
  username: makeUsername(),
  pictureUrl: makePictureUrl(),
});

export default connect(mapStateToProps, null)(Header);
