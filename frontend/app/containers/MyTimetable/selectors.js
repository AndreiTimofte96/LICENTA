import { createSelector } from 'reselect';

const selectValue = (state) => state.myTimetable;

const makeIsPending = () => createSelector(
  selectValue,
  (currentState) => currentState.isPending,
);

const makeIsSuccess = () => createSelector(
  selectValue,
  (currentState) => currentState.isSuccess,
);


const makeTimetable = () => createSelector(
  selectValue,
  (currentState) => currentState.timetableData,
);


export {
  selectValue,
  makeIsPending,
  makeIsSuccess,
  makeTimetable,
};
