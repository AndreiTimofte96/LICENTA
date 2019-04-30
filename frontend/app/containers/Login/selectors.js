import { createSelector } from 'reselect';

const selectValue = (state) => state.login;

const makeIsPending = () => createSelector(
  selectValue,
  (currentState) => currentState.isPending,
);

const makeIsSuccess = () => createSelector(
  selectValue,
  (currentState) => currentState.isSuccess,
);

export {
  selectValue,
  makeIsPending,
  makeIsSuccess,
};
