import { createSelector } from 'reselect';

const selectValue = (state) => state.homepage;

const makeIsPending = () => createSelector(
  selectValue,
  (currentState) => currentState.isPending,
);

const makeIsSuccess = () => createSelector(
  selectValue,
  (currentState) => currentState.isSuccess,
);


const makeHomepage = () => createSelector(
  selectValue,
  (currentState) => currentState.homepage,
);


export {
  selectValue,
  makeIsPending,
  makeIsSuccess,
  makeHomepage,
};
