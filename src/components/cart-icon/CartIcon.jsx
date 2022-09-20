import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as CartIconSVG } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/CartContext";

function CartIcon() {
  const { isCartOpen, setisCartOpen } = useContext(CartContext);

  const handleClick = () => {
    setisCartOpen(!isCartOpen);
    console.log(isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <CartIconSVG className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
