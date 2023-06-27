import { USER_ACTION_TYPE } from "./user.types";

const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  { type, payload } = {}
) => {
  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER_START:
      return { ...state, isLoading: true };
    case USER_ACTION_TYPE.SET_CURRENT_USER_SUCCESS:
      return { ...state, currentUser: payload, isLoading: false };
    case USER_ACTION_TYPE.SET_CURRENT_USER_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
