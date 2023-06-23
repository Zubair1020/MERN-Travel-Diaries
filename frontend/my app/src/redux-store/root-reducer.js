import { combineReducers } from "redux";
import { authReducer } from "./auth/auth.reducer";
import { userReducer } from "./user/user.reducer";
import { userInteractionReducer } from "./user-interaction/userInteraction.reducer";
import { postsReducer } from "./posts/posts.reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  posts: postsReducer,
  userInteraction: userInteractionReducer,
});
