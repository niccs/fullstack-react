import React from "react";
import { useParams } from "react-router-dom";
import "./UpdatePlace.css";
import Input from "../../common/components/formelements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../common/util/validators";

import "./PlaceForm.css";
import Button from "../../common/components/formelements/Button";
import { useForm } from "../../common/hooks/form-hook";

const PLACES = [
  {
    placeId: "p1",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    title: "Home",
    description: "Its my home",
    address: "8 spaniel ct mill park",
    location: { lat: 40.7484405, lng: -73.9878531 },
    creatorId: "u2",
  },
  {
    placeId: "p2",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    title: "Home1",
    description: "Its my home1",
    address: "8 spaniel ct mill park",
    location: { lat: 40.7484405, lng: -73.9878531 },
    creatorId: "u1",
  },
  {
    placeId: "p2",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    title: "Home1",
    description: "Its my home1",
    address: "8 spaniel ct mill park",
    location: { lat: 40.7484405, lng: -73.9878531 },
    creatorId: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const placeToBeUpdated = PLACES.find((place) => placeId === place.placeId);
  const [formState, inputHandler] = useForm(
    {
      title: {
        isValid: true,
        value: placeToBeUpdated.title,
      },
      description: {
        isValid: true,
        value: placeToBeUpdated.description,
      },
    },

    true
  );
  console.log("lets see the place", placeToBeUpdated);
  console.log("lets see the formState Update Place", formState.inputs);

  const updateHandler = (event) => {
    event.preventDefault();
    console.log("form submission data udateeee is :", formState.inputs);
  };

  if (!placeToBeUpdated) {
    return <div className="center"> Sorry the place couldnt be found</div>;
  }
  return (
    <form className="place-form" onSubmit={updateHandler}>
      <Input
        id="title"
        element="input"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText=" Please enter title here"
        initialIsValid={formState.inputs.title.isValid}
        initialValue={formState.inputs.title.value}
        onInput={inputHandler}
      ></Input>
      <Input
        id="description"
        label="Description"
        element="textarea"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter description  min 5 chars"
        initialIsValid={formState.inputs.description.isValid}
        initialValue={formState.inputs.description.value}
        onInput={inputHandler}
      ></Input>
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE FORM
      </Button>
    </form>
  );
};
export default UpdatePlace;
