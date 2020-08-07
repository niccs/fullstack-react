const express = require("express");
const { check } = require("express-validator");

const placesController = require("./../controllers/places-controller");

const router = express.Router();

router.get("/:pid", placesController.getPlaceById);

router.get("/user/:uid", placesController.getPlacesByUserId);

router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("address").not().isEmpty(),
    check("description").isLength({ min: 5 }),
  ],
  placesController.createPlace
);

router.patch("/:pid", placesController.updatePlace);

router.delete("/:pid", placesController.deletePlace);

module.exports = router;
