import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import "./checkout.styles.scss";
import PaymentForm from "../../components/payment-form/PaymentForm";

function CheckOut() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>x
        <div className="header-block">Remove</div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <h2 className="total">Total: ${cartTotal}</h2>
      <PaymentForm />
    </div>
  );
}

export default CheckOut;
