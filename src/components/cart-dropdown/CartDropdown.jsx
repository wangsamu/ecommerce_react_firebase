import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./cart-dropdown.styles.scss";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link className="nav-link" to="/checkout">
        <Button>Go to checkout</Button>
      </Link>
    </div>
  );
}

export default CartDropdown;
