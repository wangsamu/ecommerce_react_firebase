const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case "":
      return "";
    default:
      return state;
  }
};
