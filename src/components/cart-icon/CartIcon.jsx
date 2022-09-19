import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as CartIconSVG } from "../../assets/shopping-bag.svg";

function CartIcon() {
  return (
    <div className="cart-icon-container">
      <CartIconSVG className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
