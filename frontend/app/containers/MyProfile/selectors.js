import { createSelector } from 'reselect';

const selectValue = (state) => state.myProfile;
const selectUserValue = (state) => state.checkSession;

const makeIsPending = () => createSelector(
  selectValue,
  (currentState) => currentState.isPending,
);

const makeIsSuccess = () => createSelector(
  selectValue,
  (currentState) => currentState.isSuccess,
);


const makeUserPreferences = () => createSelector(
  selectValue,
  (currentState) => currentState.userPreferences,
);

const makeUserData = () => createSelector(
  selectUserValue,
  (currentState) => currentState.userData,
);

export {
  selectValue,
  makeIsPending,
  makeIsSuccess,
  makeUserPreferences,
  makeUserData
};
