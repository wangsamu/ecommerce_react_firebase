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
    <div key={id} className="checkout-item-container">
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <div>{name}</div>
      <div>
        <button onClick={handleDecreaseQuantity}>- </button>
        <p>{quantity}</p>
        <button onClick={handleIncreaseQuantity}> +</button>
      </div>
      <div>{price}</div>
      <div>
        <button onClick={handleRemove}>Remove Item</button>
      </div>
    </div>
  );
}

export default CheckoutItem;
