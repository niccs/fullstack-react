import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "./../components/PlaceList";

const UserPlaces = () => {
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

  const userId = useParams().userId;
  const filteredPlaces = PLACES.filter((place) => place.creatorId === userId);
  return <PlaceList items={filteredPlaces}></PlaceList>;
};

export default UserPlaces;
