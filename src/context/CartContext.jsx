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

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  itemCount: 0,
  priceCount: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        cartItems: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in cartReducer`);
  }
};

export const CartDropdownProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [{ cartItems }, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  // const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [priceCount, setPriceCount] = useState(0);

  useEffect(() => {
    const newItemCount = cartItems.reduce(
      (acc, current) => acc + current.quantity,
      0
    );
    setItemCount(newItemCount);
  }, [cartItems]);

  useEffect(() => {
    const newPriceCount = cartItems.reduce(
      (acc, current) => acc + current.quantity * current.price,
      0
    );
    setPriceCount(newPriceCount);
  }, [cartItems]);

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

  const updateCartItemReducer = (newCartItems) => {
    /*dispatch new action with payload including:
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
    {
      newCartItems,
      newItemCount,
      newPriceCount
    }
    */
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: newCartItems,
    });
  };

  const value = {
    isCartOpen,
    setisCartOpen,
    cartItems,
    setCartItems,
    addItemToCart,
    itemCount,
    priceCount,
    subtractItemFromCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
