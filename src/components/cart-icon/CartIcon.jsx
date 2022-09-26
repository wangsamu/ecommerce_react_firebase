import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { CartIconContainer, ShoppingIcon, ItemCont } from "./cart-icon.styles";

function CartIcon() {
  const { isCartOpen, setisCartOpen, itemCount } = useContext(CartContext);

  const handleClick = () => {
    setisCartOpen(!isCartOpen);
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
