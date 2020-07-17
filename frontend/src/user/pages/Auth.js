import React, { useState, useContext } from "react";
import Input from "../../common/components/formelements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
} from "../../common/util/validators";
import { useForm } from "../../common/hooks/form-hook";
import Button from "../../common/components/formelements/Button";
import Card from "../../common/components/uiElements/Card";

import "./AuthForm.css";
import { AuthContext } from "../../common/context/auth-context";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log("login pressed", formState);
    auth.login();
  };

  const switchModeHandler = () => {
    //we are going  from sign up to loginMode so we need to drop the name
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } //we are going  from login  to signup so we added a new name field and hence form validity will surely be false
    else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }

    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            label="Name"
            type="text"
            id="name"
            placeholder="Enter your name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter the name"
            onInput={inputHandler}
          ></Input>
        )}
        <Input
          element="input"
          id="email"
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
          id="password"
          validators={[VALIDATOR_MINLENGTH(4), VALIDATOR_REQUIRE()]}
          placeholder="Enter your password"
          type="password"
          errorText="Please enter a valid password"
          onInput={inputHandler}
        />
        <Button disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </Card>
  );
};

export default Auth;
