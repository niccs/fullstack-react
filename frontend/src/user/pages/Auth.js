import React from "react";
import Input from "../../common/components/formelements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
} from "../../common/util/validators";
import { useForm } from "../../common/hooks/form-hook";
import Button from "../../common/components/formelements/Button";

import "./AuthForm.css";
const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className="auth-form " onSubmit={authSubmitHandler}>
      <Input
        element="input"
        label="Email"
        validators={[
          VALIDATOR_MINLENGTH(4),
          VALIDATOR_REQUIRE(),
          VALIDATOR_EMAIL(),
        ]}
        placeholder="Enter your email"
        type="email"
        errorText="Please enter a valid email"
        onInput={inputHandler}
      />
      <Input
        element="input"
        label="Password"
        validators={[VALIDATOR_MINLENGTH(4), VALIDATOR_REQUIRE()]}
        placeholder="Enter your password"
        type="password"
        errorText="Please enter a valid password"
        onInput={inputHandler}
      />
      <Button>LOGIN</Button>
    </form>
  );
};

export default Auth;
