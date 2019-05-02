import { createSelector } from 'reselect';

const selectValue = (state) => state.mytimetable;

const makeIsPending = () => createSelector(
  selectValue,
  (currentState) => currentState.isPending,
);

const makeIsSuccess = () => createSelector(
  selectValue,
  (currentState) => currentState.isSuccess,
);


const makeMessage = () => createSelector(
  selectValue,
  (currentState) => currentState.message,
);


export {
  selectValue,
  makeIsPending,
  makeIsSuccess,
  makeMessage,
};
