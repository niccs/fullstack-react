import React from "react";
import Input from "../../common/components/formelements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../common/util/validators";
import "./PlaceForm.css";
import Button from "../../common/components/formelements/Button";
import { useForm } from "../../common/hooks/form-hook";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  console.log("lets see the formState of NewPlace", formState.inputs);
  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log("form submission data is :", formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="your name please"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="your description please"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description, atleast 5 characters"
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="textarea"
        label="your address please"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid address, atleast 5 characters"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
