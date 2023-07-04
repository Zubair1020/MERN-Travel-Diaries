import { POSTS_ACTION_TYPES } from "./posts.types";

const POSTS_INITIAL_STATE = {
  posts: [],
  isLoading: false,
  error: null,
  unsubscribe: null,
};

export const postsReducer = (
  state = POSTS_INITIAL_STATE,
  { type, payload } = {}
) => {
  switch (type) {
    case POSTS_ACTION_TYPES.FETCH_POSTS_START:
      return { ...state, isLoading: true };
    case POSTS_ACTION_TYPES.FETCH_POSTS_SUCCESS:
      return { ...state, posts: payload, isLoading: false };
    case POSTS_ACTION_TYPES.FETCH_POSTS_FAILED:
      return { ...state, error: payload, isLoading: false };
    case POSTS_ACTION_TYPES.UNSUBSCRIBE_POSTS:
      return { ...state, unsubscribe: payload };
    default:
      return state;
  }
};
