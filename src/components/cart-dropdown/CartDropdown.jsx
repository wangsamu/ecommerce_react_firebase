import React from "react";
import Button from "../button/Button";
import "./cart-dropdown.styles.scss";

function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">item patata</div>
      <Button>Go to checkout</Button>
    </div>
  );
}

export default CartDropdown;
