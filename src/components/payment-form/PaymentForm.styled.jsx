import styled from 'styled-components';
import Button from '../button/Button';

const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;

const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;

export { PaymentFormContainer, FormContainer, PaymentButton };
