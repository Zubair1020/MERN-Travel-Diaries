import { USER_ACTION_TYPE } from "./user.types";

import createAction from "../../utils/reducer.utils";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signAuthInWithEmailAndPassword,
} from "../../utils/firebase.utils";

export const setCurrentUserStart = () =>
  createAction(USER_ACTION_TYPE.SET_CURRENT_USER_START);

export const setCurrentUserSuccess = (user) =>
  createAction(USER_ACTION_TYPE.SET_CURRENT_USER_SUCCESS, user);

export const setCurrentUserFailed = (error) =>
  createAction(USER_ACTION_TYPE.SET_CURRENT_USER_FAILED, error);

export const setCurrentUserAsync =
  (data, isSignedUp, navigate, reset) => async (dispatch) => {
    try {
      dispatch(setCurrentUserStart());
      if (!isSignedUp) {
        const { user } = await createAuthUserWithEmailAndPassword(
          data.email,
          data.password
        );
        dispatch(setCurrentUserSuccess(user.uid));
        createUserDocumentFromAuth(user, data.name);
      } else {
        const { user } = await signAuthInWithEmailAndPassword(
          data.email,
          data.password
        );
        dispatch(setCurrentUserSuccess(user.uid));
      }
      navigate("/add");
      reset();
    } catch (error) {
      let errorMessage;
      switch (error.message) {
        case "Firebase: Error (auth/user-not-found).":
          errorMessage = "This email is not registered";
          break;
        case "Firebase: Error (auth/wrong-password).":
          errorMessage = "Incorrect password. Please enter correct password";
          break;
        case "Firebase: Error (auth/email-already-in-use).":
          errorMessage = "This email is already registered. Please log in";
          break;
        case "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).":
          errorMessage =
            "Too many attempts. Pleas try again later with the right password ";
          break;
        default:
          console.error("Un recognized error");
      }
      dispatch(setCurrentUserFailed(errorMessage));
      throw error;
    }
  };
