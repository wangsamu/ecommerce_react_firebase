const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (
  state = {
    currentUser: null,
  },
  action
) => {
  console.log(state);
  console.log("dispatched");

  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};

export { userReducer };
