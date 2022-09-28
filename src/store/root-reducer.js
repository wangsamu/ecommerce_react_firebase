import { combineReducerss } from "redux";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducerss({
  user: userReducer,
});
