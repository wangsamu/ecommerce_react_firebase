import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { CartDropdownProvider } from "./context/CartContext";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";
import { Elements } from "@stripe/react-stripe-js";

import "./index.styles.scss";
import { stripePromise } from "./utils/stipe/stripe.utils";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartDropdownProvider>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </CartDropdownProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
