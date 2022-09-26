import React from "react";
import {
  CheckOutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
  Price,
} from "./checkout-item.styles";

function CheckoutItem(props) {
  const {
    product,
    handleRemove,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = props;

  const { id, name, imageUrl, price, quantity } = product;

  return (
    <CheckOutItemContainer key={id}>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={handleDecreaseQuantity}>&#10094; </Arrow>
        <span>{quantity}</span>
        <Arrow onClick={handleIncreaseQuantity}> &#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={handleRemove}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  );
}

export default CheckoutItem;
