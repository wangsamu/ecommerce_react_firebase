import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CheckOut() {
  const { cartItems } = useContext(CartContext);
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
          <tr key={product.id}>
            <td>
              <img src={product.imageUrl} alt={product.name} />
            </td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>Remove</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default CheckOut;
