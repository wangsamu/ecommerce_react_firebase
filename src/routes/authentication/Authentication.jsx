import React from "react";
import SignInForm from "../../components/sign-in-form/SignInForm";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import "./authentication.styles.scss";

function Authentication() {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
