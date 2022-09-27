import { createContext, useEffect, useReducer, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signOutUser,
} from "../utils/firebase/firebase.utils";

//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  console.log(state);
  console.log("dispatched");

  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };
    case "increment":
      return {
        value: state.value + 1,
      };

    default:
      throw new Error("unhandled type ${type} in userReducer");
  }
};

const INITIAL_STATE = {
  currentUser: null,
};
export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser);

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
