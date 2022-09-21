import { createContext, useContext, useEffect, useState } from "react";

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

//*********** */ to be substituted by addItemToCart function from CartContext
//add the following functionalities:
//subtract the obj.quantity when clicked
//when it reaches zero, eliminate the product from the cartItems array
const subtractCartItem = (cartItems, productToSubtract) => {
  //when clicked, subtract one to cartItems.product.quantity
  if (productToSubtract.quantity > 0) {
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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartDropdownProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [priceCount, setPriceCount] = useState(0);

  useEffect(() => {
    const newItemCount = cartItems.reduce(
      (acc, current) => acc + current.quantity,
      0
    );

    const newPriceCount = cartItems.reduce(
      (acc, current) => acc + current.quantity * current.price,
      0
    );

    setItemCount(newItemCount);
    setPriceCount(newPriceCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const subtractItemFromCart = (productToAdd) => {
    setCartItems(subtractCartItem(cartItems, productToAdd));
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
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
