import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as CartIconSVG } from "../../assets/shopping-bag.svg";
import { CartDropdownContext } from "../../context/CartDropdownContext";

function CartIcon() {
  const { isOpen, setIsOpen } = useContext(CartDropdownContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <CartIconSVG className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
