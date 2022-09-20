import { createContext, useContext, useState } from "react";
import CartDropdown from "../components/cart-dropdown/CartDropdown";

const addCartItem = (cartItems, productToAdd) => {
  const itemInCart = cartItems.filter((item) => item.id === productToAdd.id);
  const newCartItems = [...cartItems];
  //check if the product is present in cartItems array
  if (itemInCart) {
    //if yes, increment the amount of that product
    const newItemQuantity = itemInCart.quantity + 1;
    //then return the new array
    newCartItems.map((item) => {
      if (item.id === itemInCart.id) {
        item.quantity = newItemQuantity;
      }
    });
    return newCartItems;
  } else {
    //if not, add the product to the array
    const newItem = {
      ...productToAdd,
      quantity: 1,
    };
    newCartItems.push(productToAdd);
    return newCartItems;
    //then return the new array
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
  const value = { isCartOpen, setisCartOpen };

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
