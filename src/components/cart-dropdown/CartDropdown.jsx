import React, { useContext } from "react";
import { CartDropdownContext } from "../../context/CartDropdownContext";
import Button from "../button/Button";
import "./cart-dropdown.styles.scss";

function CartDropdown() {
  const { isOpen } = useContext(CartDropdownContext);

  //   if (!isOpen) {
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
