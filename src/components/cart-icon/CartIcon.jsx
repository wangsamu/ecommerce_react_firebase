import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { CartIconContainer, ShoppingIcon, ItemCont } from "./cart-icon.styles";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, itemCount } = useContext(CartContext);

  const handleClick = () => {
    setIsCartOpen(!isCartOpen);
    console.log(isCartOpen);
  };

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon />
      <ItemCont>{itemCount}</ItemCont>
    </CartIconContainer>
  );
}

export default CartIcon;
