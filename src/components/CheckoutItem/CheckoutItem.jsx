import React from "react";
import "./checkout-item.styles.scss";

function CheckoutItem(props) {
  const {
    product,
    handleRemove,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = props;

  const { id, name, imageUrl, price, quantity } = product;

  return (
    <div>
      <tr key={id}>
        <td>
          <img src={imageUrl} alt={name} />
        </td>
        <td>{name}</td>
        <td>
          <button onClick={handleDecreaseQuantity}>- </button>
          <p>{quantity}</p>
          <button onClick={handleIncreaseQuantity}> +</button>
        </td>
        <td>{price}</td>
        <td>
          <button onClick={handleRemove}>Remove Item</button>
        </td>
      </tr>
    </div>
  );
}

export default CheckoutItem;
