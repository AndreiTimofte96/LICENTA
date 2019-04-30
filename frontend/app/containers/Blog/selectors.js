import { createSelector } from 'reselect';

const selectValue = (state) => state.blog;

const makeIsPending = () => createSelector(
  selectValue,
  (currentState) => currentState.isPending,
);

export {
  selectValue,
  makeIsPending,
};
