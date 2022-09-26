import React from "react";
import {
  CheckOutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
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
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={handleDecreaseQuantity}>&#10094; </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleIncreaseQuantity}> &#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={handleRemove}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  );
}

export default CheckoutItem;
