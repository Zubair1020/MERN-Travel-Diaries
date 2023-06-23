import { AUTH_ACTION_TYPES } from "./auth.types";

const AUTH_INITIAL_STATE = {
  isSignedUp: false,
  isLoggedIn: false,
  authError: null,
};

export const authReducer = (
  state = AUTH_INITIAL_STATE,
  { type, payload } = {}
) => {
  switch (type) {
    case AUTH_ACTION_TYPES.SET_IS_SIGNED_UP:
      return { ...state, isSignedUp: payload };
    case AUTH_ACTION_TYPES.SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: payload };
    case AUTH_ACTION_TYPES.SET_AUTH_ERROR:
      return { ...state, authError: payload };
    default:
      return state;
  }
};
