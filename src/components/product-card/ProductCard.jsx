import React from "react";
import Button from "../button/Button";
import "./product-card.styles.scss";
import { CartContext } from "../../context/CartContext";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
