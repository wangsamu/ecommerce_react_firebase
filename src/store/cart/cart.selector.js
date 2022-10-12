import { createSelector } from "reselect";

const selectCartReducer = (state) => state.createSelector;

const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

const slectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem,
    price,
    0
  )
);

const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export { selectIsCartOpen, selectCartItems, slectCartTotal, selectCartCount };
