import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import { CartIconContainer, ShoppingIcon, ItemCont } from "./cart-icon.styles";

function CartIcon() {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleClick = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon />
      <ItemCont>{itemCount}</ItemCont>
    </CartIconContainer>
  );
}

export default CartIcon;
