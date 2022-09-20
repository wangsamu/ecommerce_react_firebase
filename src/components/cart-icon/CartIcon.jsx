import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as CartIconSVG } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/CartContext";

function CartIcon() {
  const { isCartOpen, setisCartOpen, cartItems } = useContext(CartContext);
  const itemCount = cartItems
    .map((product) => product.quantity)
    .reduce((acc, current) => acc + current, 0);

  const handleClick = () => {
    setisCartOpen(!isCartOpen);
    console.log(isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <CartIconSVG className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

export default CartIcon;
