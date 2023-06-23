import createAction from "../../utils/reducer.utils";
import { POSTS_ACTION_TYPES } from "./posts.types";

export const setPosts = (posts) =>
  createAction(POSTS_ACTION_TYPES.SET_POSTS, posts);
