import { createAction } from "../../utils/reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategory = (user) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY, user);
