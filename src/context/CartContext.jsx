import { createContext, useEffect, useReducer, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const itemIsInCart = cartItems.find((item) => item.id === productToAdd.id);

  if (itemIsInCart) {
    const newCartItems = cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    return newCartItems;
  } else {
    const newItem = {
      ...productToAdd,
      quantity: 1,
    };
    return [...cartItems, newItem];
  }
};

const subtractCartItem = (cartItems, productToSubtract) => {
  if (productToSubtract.quantity > 1) {
    const newCartItems = cartItems.map((item) =>
      item.id === productToSubtract.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    return newCartItems;
  } else {
    const newCartItems = cartItems.filter(
      (item) => item.id !== productToSubtract.id
    );
    return newCartItems;
  }
};

const removeCartItem = (cartItems, productToRemove) => {
  const newCartItems = cartItems.filter(
    (item) => item.id !== productToRemove.id
  );
  return newCartItems;
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  itemCount: 0,
  priceCount: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in cartReducer`);
  }
};

export const CartDropdownProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, itemCount, priceCount }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const subtractItemFromCart = (productToAdd) => {
    const newCartItems = subtractCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const removeItemFromCart = (productToAdd) => {
    const newCartItems = removeCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
      payload: bool,
    });
  };

  // const updateIsCartOpenReducer = (newIsCartOpen) => {
  //   dispatch({
  //     type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
  //     payload: {
  //       isCartOpen: newIsCartOpen,
  //     },
  //   });
  // };

  const updateCartItemReducer = (newCartItems) => {
    // generate newItemCount
    const newItemCount = newCartItems.reduce(
      (acc, current) => acc + current.quantity,
      0
    );
    // generate newPriceCount
    const newPriceCount = newCartItems.reduce(
      (acc, current) => acc + current.quantity * current.price,
      0
    );

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        itemCount: newItemCount,
        priceCount: newPriceCount,
      },
    });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    itemCount,
    priceCount,
    subtractItemFromCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
