import { createContext, useContext, useState } from "react";
import CartDropdown from "../components/cart-dropdown/CartDropdown";

const addCartItem = (cartItems, productToAdd) => {
  const itemIsInCart = cartItems.find((item) => item.id === productToAdd.id);

  if (itemIsInCart) {
    const newCartItems = cartItems.map((item) => {
      item.id === itemInCart.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
    return newCartItems;
  } else {
    const newItem = {
      ...productToAdd,
      quantity: 1,
    };
    return [...cartItems, newItem];
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartDropdownProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setisCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
