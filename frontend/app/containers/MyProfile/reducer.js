import {
  GET_USER_PREFERENCES_PENDING,
  GET_USER_PREFERENCES_SUCCESS,
  GET_USER_PREFERENCES_ERROR,
  PUT_NEW_PASSWORD_ERROR,
  PUT_NEW_PASSWORD_PENDING,
  PUT_NEW_PASSWORD_SUCCESS,
  PUT_USER_PREFERENCES_ERROR,
  PUT_USER_PREFERENCES_PENDING,
  PUT_USER_PREFERENCES_SUCCESS,
  UPLOAD_USER_PICTURE_ERROR,
  UPLOAD_USER_PICTURE_PENDING,
  UPLOAD_USER_PICTURE_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = {
  userPreferences: {},
  isPending: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',

  isPasswordSetPending: false,
  isPasswordSetSuccess: false,
  isPasswordSetError: false,
  changePasswordMessage: '',

  isPreferenceSetPending: false,
  isPreferenceSetSuccess: false,
  isPreferenceSetError: false,
  preferencesSetMessage: '',

  userPicture: {},
  isUploadFilePending: false,
  isUploadFileSuccess: false,
  isUploadFileError: false,
  uploadFileMessage: '',
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_PREFERENCES_PENDING:
      return {
        ...state,
        isPending: action.isPending,
      };
    case GET_USER_PREFERENCES_SUCCESS:
      return {
        ...state,
        isSuccess: action.isSuccess,
        userPreferences: action.payload,
      };
    case GET_USER_PREFERENCES_ERROR:
      return {
        ...state,
        isError: action.isError,
        errorMessage: action.errorMessage,
      };

    case PUT_USER_PREFERENCES_PENDING:
      return {
        ...state,
        isPreferenceSetPending: action.isPending,
        isPreferenceSetSuccess: false,
        isPreferenceSetError: false,
      };
    case PUT_USER_PREFERENCES_SUCCESS:
      return {
        ...state,
        isPreferenceSetSuccess: action.isSuccess,
        preferencesSetMessage: action.payload,
      };
    case PUT_USER_PREFERENCES_ERROR:
      return {
        ...state,
        isPreferenceSetError: action.isError,
        preferencesSetMessage: action.payload,
      };

    case PUT_NEW_PASSWORD_PENDING:
      return {
        ...state,
        isPasswordSetPending: action.isPending,
        isPasswordSetError: false,
        isPasswordSetSuccess: false,
      };
    case PUT_NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        isPasswordSetSuccess: action.isSuccess,
        isPasswordSetError: false,
        changePasswordMessage: action.payload,
      };
    case PUT_NEW_PASSWORD_ERROR:
      return {
        ...state,
        isPasswordSetError: action.isError,
        isPasswordSetSuccess: false,
        changePasswordMessage: action.payload,
      };

    case UPLOAD_USER_PICTURE_PENDING:
      return {
        ...state,
        isUploadFilePending: action.isPending,
        isUploadFileError: false,
        isUploadFileSuccess: false,
      };
    case UPLOAD_USER_PICTURE_SUCCESS:
      return {
        ...state,
        isUploadFileSuccess: action.isSuccess,
        isUploadFileError: false,
        uploadFileMessage: action.message,
        userPicture: action.file,
      };
    case UPLOAD_USER_PICTURE_ERROR:
      return {
        ...state,
        isUploadFileError: action.isError,
        isUploadFileSuccess: false,
        uploadFileMessage: action.payload,
      };


    default:
      return state;
  }
}
export default profileReducer;
