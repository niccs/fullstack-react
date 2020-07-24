const HttpError = require("../models/http-error");

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
    creatorId: "u2",
  },
];

const getPlaceById = (req, res, next) => {
  const pId = req.params.pid;
  const place = PLACES.find((place) => place.placeId === pId);

  if (!place) {
    return next(new HttpError("couldnt find the place for the id", 404));
  }
  res.json({ place });
};

const getPlacesByUserId = (req, res, next) => {
  const uId = req.params.uid;

  const placesForUserId = PLACES.filter((place) => place.creatorId === uId);
  if (!placesForUserId || placesForUserId.length === 0) {
    return next(new HttpError("places for userIs not found", 404));
  }
  res.json({ placesForUserId });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
