import React, { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../context/CartContext";

function CheckOut() {
  const { cartItems, priceCount } = useContext(CartContext);
  //   const { imageUrl, name, id, price, quantity } = cartItems;

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
          <CheckoutItem product={product} />
        ))}
      </table>
      <h2>Total: ${priceCount}</h2>
    </div>
  );
}

export default CheckOut;
