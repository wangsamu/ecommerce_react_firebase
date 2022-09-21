import React, { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../context/CartContext";
import "./checkout.styles.scss";

function CheckOut() {
  const {
    cartItems,
    setCartItems,
    priceCount,
    addItemToCart,
    subtractItemFromCart,
    removeItemFromCart,
  } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems.map((product) => (
        <CheckoutItem
          product={product}
          key={product.id}
          handleRemove={() => removeItemFromCart(product)}
          handleIncreaseQuantity={() => addItemToCart(product)}
          handleDecreaseQuantity={() => subtractItemFromCart(product)}
        />
      ))}
      <h2 className="total">Total: ${priceCount}</h2>
    </div>
  );
}

export default CheckOut;
