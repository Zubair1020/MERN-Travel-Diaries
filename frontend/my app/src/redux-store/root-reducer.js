import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { userInteractionReducer } from "./user-interaction/userInteraction.reducer";
import { postsReducer } from "./posts/posts.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  userInteraction: userInteractionReducer,
});
