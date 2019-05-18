import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { makeIsPending, makeIsSuccess, makeTimetable } from './selectors';
import { getTimetableData } from './actions';
import reducer from './reducer';
import MyTimetable from './MyTimetable';

const mapDispatchToProps = (dispatch) => ({
  getTimetableData: (month, year) => getTimetableData(month, year)(dispatch),
});

const mapStateToProps = createStructuredSelector({
  isPending: makeIsPending(),
  isSuccess: makeIsSuccess(),
  timetableData: makeTimetable(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'myTimetable', reducer });

export default compose(withReducer, withConnect)(MyTimetable);
