import { createActions } from "../../utils/reducer";

const setCurrentUser = (user) => {
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
