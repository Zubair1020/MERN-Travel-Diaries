// import { getAllPosts } from "../../utils/firebase.utils";
import { getAllPosts } from "../../utils/firebase.utils";
import createAction from "../../utils/reducer.utils";
import { POSTS_ACTION_TYPES } from "./posts.types";

export const fetchPostsStart = () =>
  createAction(POSTS_ACTION_TYPES.FETCH_POSTS_START);

export const fetchPostsSuccess = (posts) =>
  createAction(POSTS_ACTION_TYPES.FETCH_POSTS_SUCCESS, posts);

export const fetchPostsFailed = (error) =>
  createAction(POSTS_ACTION_TYPES.FETCH_POSTS_FAILED, error);

export const setPostsUnsubscribe = (unsubscribe) =>
  createAction(POSTS_ACTION_TYPES.UNSUBSCRIBE_POSTS, unsubscribe);

export const fetchPostsAsync = () => async (dispatch) => {
  dispatch(fetchPostsStart());
  try {
    const unsubscribe = getAllPosts((posts) => {
      dispatch(fetchPostsSuccess(posts));
    });
    if (typeof unsubscribe === "function")
      dispatch(setPostsUnsubscribe(unsubscribe));
  } catch (error) {
    dispatch(fetchPostsFailed(error));
    throw `Error during fetching posts : ${error}`;
  }
};
