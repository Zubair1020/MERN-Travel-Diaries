import { USER_INTERACTION_ACTION_TYPES } from "./userInteraction.types";

const USER_INTERACTION_INITIAL_STATE = {
  tabValue: 0,
};

export const userInteractionReducer = (
  state = USER_INTERACTION_INITIAL_STATE,
  { type, payload } = {}
) => {
  switch (type) {
    case USER_INTERACTION_ACTION_TYPES.SET_TAB_VALUE:
      return { ...state, tabValue: payload };
    default:
      return state;
  }
};
