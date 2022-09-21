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
    <div>
      <table>
        <tr>
          <th>Product</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
        {cartItems.map((product) => (
          <CheckoutItem
            product={product}
            key={product.id}
            handleRemove={() => removeItemFromCart(product)}
            handleIncreaseQuantity={() => addItemToCart(product)}
            handleDecreaseQuantity={() => subtractItemFromCart(product)}
          />
        ))}
      </table>
      <h2>Total: ${priceCount}</h2>
    </div>
  );
}

export default CheckOut;
