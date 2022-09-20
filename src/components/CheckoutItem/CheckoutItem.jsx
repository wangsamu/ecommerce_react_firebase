import React from "react";

function CheckoutItem({ product }) {
  return (
    <div>
      <tr key={product.id}>
        <td>
          <img src={product.imageUrl} alt={product.name} />
        </td>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
        <td>Remove</td>
      </tr>
    </div>
  );
}

export default CheckoutItem;
