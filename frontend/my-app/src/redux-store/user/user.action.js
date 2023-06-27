import { USER_ACTION_TYPE } from "./user.types";

import { setAuthRequest } from "../../utils/crud-api-call.utils";
import createAction from "../../utils/reducer.utils";

export const setCurrentUserStart = () =>
  createAction(USER_ACTION_TYPE.SET_CURRENT_USER_START);

export const setCurrentUserSuccess = (user) =>
  createAction(USER_ACTION_TYPE.SET_CURRENT_USER_SUCCESS, user);

export const setCurrentUserFailed = (error) =>
  createAction(USER_ACTION_TYPE.SET_CURRENT_USER_FAILED, error);

export const setCurrentUserAsync =
  (data, isSignedUp, navigate, reset) => async (dispatch) => {
    try {
      const resData = await setAuthRequest(data, isSignedUp, dispatch);
      dispatch(setCurrentUserStart());
      !isSignedUp
        ? dispatch(setCurrentUserSuccess(resData.users._id))
        : dispatch(setCurrentUserSuccess(resData.id));
      navigate("/add");
      reset();
    } catch (error) {
      dispatch(setCurrentUserFailed(error));
      throw error;
    }
  };
