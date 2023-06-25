import { USER_INTERACTION_ACTION_TYPES } from "./userInteraction.types";

const USER_INTERACTION_INITIAL_STATE = {
  tabValue: 0,
  isSignedUp: false,
};

export const userInteractionReducer = (
  state = USER_INTERACTION_INITIAL_STATE,
  { type, payload } = {}
) => {
  switch (type) {
    case USER_INTERACTION_ACTION_TYPES.SET_TAB_VALUE:
      return { ...state, tabValue: payload };
    case USER_INTERACTION_ACTION_TYPES.SET_IS_SIGNED_UP:
      return { ...state, isSignedUp: payload };
    default:
      return state;
  }
};
