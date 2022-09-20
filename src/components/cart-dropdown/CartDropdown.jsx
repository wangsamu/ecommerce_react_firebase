import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "../button/Button";
import "./cart-dropdown.styles.scss";

function CartDropdown() {
  const { isCartOpen } = useContext(CartContext);

  //   if (!isCartOpen) {
  //     return;
  //   }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">item patata</div>
      <Button>Go to checkout</Button>
    </div>
  );
}

export default CartDropdown;
