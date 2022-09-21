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
        <span onClick={handleDecreaseQuantity}>&#10094;</span>
        <span>{quantity}</span>
        <span onClick={handleIncreaseQuantity}>&#10095;</span>
      </div>
      <div className="price">{price}</div>
      <button className="remove-button" onClick={handleRemove}>
        &#10005;
      </button>
    </div>
  );
}

export default CheckoutItem;
