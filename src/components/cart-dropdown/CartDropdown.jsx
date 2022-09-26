import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./cart-dropdown.styles.scss";

function CartDropdown() {
  const { cartItems, setisCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    setisCartOpen(false);
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 ?         {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      : <span>Your cart is empty</span>}
      </div>
      <Button onClick={goToCheckout}>Go to checkout</Button>
    </div>
  );
}

export default CartDropdown;
