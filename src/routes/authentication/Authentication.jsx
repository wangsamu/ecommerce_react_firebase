import React from "react";
import SignInForm from "../../components/sign-in-form/SignInForm";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import "./authentication.styles.scss";

function Authentication() {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
}

export default Authentication;
