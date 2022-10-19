import { CardElement } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { PaymentFormContainer } from "./PaymentForm.styled";

const PaymentForm = () => {
  return (
    <PaymentFormContainer>
      <CardElement />
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay now </Button>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
