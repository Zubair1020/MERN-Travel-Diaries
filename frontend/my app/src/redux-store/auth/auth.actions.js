import createAction from "../../utils/reducer.utils";
import { AUTH_ACTION_TYPES } from "./auth.types";

export const setIsSignedUp = (isSignedUp) =>
  createAction(AUTH_ACTION_TYPES.SET_IS_SIGNED_UP, isSignedUp);

export const setIsLoggedIn = (isLoggedIn) =>
  createAction(AUTH_ACTION_TYPES.SET_IS_LOGGED_IN, isLoggedIn);

export const setAuthError = (error) =>
  createAction(AUTH_ACTION_TYPES.SET_AUTH_ERROR, error);
