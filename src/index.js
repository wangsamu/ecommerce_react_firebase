import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "../src/context/UserContext";
import reportWebVitals from "./reportWebVitals";
import "./index.styles.scss";
import { CartDropdownProvider } from "./context/CartContext";
import { CategoriesProvider } from "./context/CategoriesContext";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
            <CartDropdownProvider>
              <App />
            </CartDropdownProvider>
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
