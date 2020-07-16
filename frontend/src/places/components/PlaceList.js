import React from "react";

import Card from "./../../common/components/uiElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";
import Button from "../../common/components/formelements/Button";

const PlaceList = ({ items }) => {
  if (items.length === 0) {
    return (
      <Card>
        <h1> No place found</h1>
        <Button to="/places/new">Share Place</Button>
      </Card>
    );
  }
  return (
    <ul className="places-list">
      {items.map((place) => (
        <PlaceItem key={place.placeId} place={place}></PlaceItem>
      ))}
    </ul>
  );
};

export default PlaceList;
