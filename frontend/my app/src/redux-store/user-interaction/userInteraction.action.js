import createAction from "../../utils/reducer.utils";
import { USER_INTERACTION_ACTION_TYPES } from "./userInteraction.types";

export const setTabValue = (tabValue) =>
  createAction(USER_INTERACTION_ACTION_TYPES.SET_TAB_VALUE, tabValue);
