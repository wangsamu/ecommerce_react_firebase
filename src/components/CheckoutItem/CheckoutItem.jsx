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
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <button onClick={handleDecreaseQuantity}>- </button>
        <p>{quantity}</p>
        <button onClick={handleIncreaseQuantity}> +</button>
      </div>
      <div className="price">{price}</div>
      <button className="remove-button" onClick={handleRemove}>
        Remove Item
      </button>
    </div>
  );
}

export default CheckoutItem;
