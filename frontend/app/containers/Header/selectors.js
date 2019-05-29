import { createSelector } from 'reselect';

const selectValue = (state) => state.checkSession;

const makeUsername = () => createSelector(
  selectValue,
  (currentState) => currentState.userData.username,
);

const makePictureUrl = () => createSelector(
  selectValue,
  (currentState) => currentState.userData.pictureUrl,
);


export {
  selectValue,
  makeUsername,
  makePictureUrl,
};
