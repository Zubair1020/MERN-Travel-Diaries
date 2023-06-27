import { getPosts } from "../../utils/crud-api-call.utils";
import createAction from "../../utils/reducer.utils";
import { POSTS_ACTION_TYPES } from "./posts.types";

export const fetchPostsStart = () =>
  createAction(POSTS_ACTION_TYPES.FETCH_POSTS_START);

export const fetchPostsSuccess = (posts) =>
  createAction(POSTS_ACTION_TYPES.FETCH_POSTS_SUCCESS, posts);

export const fetchPostsFailed = (error) =>
  createAction(POSTS_ACTION_TYPES.FETCH_POSTS_FAILED, error);

export const fetchPostsAsync = () => async (dispatch) => {
  dispatch(fetchPostsStart());
  try {
    const data = await getPosts();
    dispatch(fetchPostsSuccess(data.posts));
  } catch (error) {
    dispatch(fetchPostsFailed(error));
    throw `Error during fetching posts : ${error}`;
  }
};
