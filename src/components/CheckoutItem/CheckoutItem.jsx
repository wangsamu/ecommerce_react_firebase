import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

import {
  CheckOutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

function CheckoutItem({ cartItem }) {
  const { id, name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleDecreaseQuantity = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const handleIncreaseQuantity = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const handleRemove = () => dispatch(clearItemFromCart(cartItems, cartItem));

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
