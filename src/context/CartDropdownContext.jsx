import { createContext, useContext, useState } from "react";
import CartDropdown from "../components/cart-dropdown/CartDropdown";

export const CartDropdownContext = createContext({
  isOpen: false,
  setIsCartOpen: () => {},
});

export const CartDropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = { isOpen, setIsOpen };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};