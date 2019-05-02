import { createSelector } from 'reselect';

const selectValue = (state) => state.checkSession;

const makeUsername = () => createSelector(
  selectValue,
  (currentState) => currentState.userData.username,
);


export {
  selectValue,
  makeUsername,
};
