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

const makeIsError = () => createSelector(
  selectValue,
  (currentState) => currentState.isError,
);

const makeIsPreferenceSetPending = () => createSelector(
  selectValue,
  (currentState) => currentState.isPreferenceSetPending,
);

const makeIsPreferenceSetSuccess = () => createSelector(
  selectValue,
  (currentState) => currentState.isPreferenceSetSuccess,
);

const makeIsPreferenceSetError = () => createSelector(
  selectValue,
  (currentState) => currentState.isPreferenceSetError,
);

const makeIsPasswordSetPending = () => createSelector(
  selectValue,
  (currentState) => currentState.isPasswordSetPending,
);

const makeIsPasswordSetSuccess = () => createSelector(
  selectValue,
  (currentState) => currentState.isPasswordSetSuccess,
);

const makeIsPasswordSetError = () => createSelector(
  selectValue,
  (currentState) => currentState.isPasswordSetError,
);

const makeIsUploadFilePending = () => createSelector(
  selectValue,
  (currentState) => currentState.isUploadFilePending,
);

const makeIsUploadFileSuccess = () => createSelector(
  selectValue,
  (currentState) => currentState.isUploadFileSuccess,
);

const makeIsUploadFileError = () => createSelector(
  selectValue,
  (currentState) => currentState.isUploadFileError,
);


const makeUserPreferences = () => createSelector(
  selectValue,
  (currentState) => currentState.userPreferences,
);

const makeUserData = () => createSelector(
  selectUserValue,
  (currentState) => currentState.userData,
);

const makeChangePasswordMessage = () => createSelector(
  selectValue,
  (currentState) => currentState.changePasswordMessage,
);

const makePreferencesSetMessage = () => createSelector(
  selectValue,
  (currentState) => currentState.preferencesSetMessage,
);

const makeUploadFileMessage = () => createSelector(
  selectValue,
  (currentState) => currentState.uploadFileMessage,
);

const makeUserPicture = () => createSelector(
  selectValue,
  (currentState) => currentState.userPicture,
);


export {
  selectValue,
  makeIsPending,
  makeIsSuccess,
  makeIsError,
  makeUserPreferences,
  makeUserData,
  makeChangePasswordMessage,
  makePreferencesSetMessage,
  makeIsPreferenceSetPending,
  makeIsPreferenceSetError,
  makeIsPreferenceSetSuccess,
  makeIsPasswordSetPending,
  makeIsPasswordSetError,
  makeIsPasswordSetSuccess,
  makeIsUploadFilePending,
  makeIsUploadFileSuccess,
  makeIsUploadFileError,
  makeUploadFileMessage,
  makeUserPicture,
};
