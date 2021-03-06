const express = require("express");

const userController = require("../controllers/users-controller");

const router = express.Router();

router.post("/signup", userController.createUser);
router.post("/login", userController.loginUser);

router.get("/", userController.getUsers);

module.exports = router;
