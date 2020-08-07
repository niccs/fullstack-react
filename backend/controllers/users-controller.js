const { v4: uuidv4 } = require("uuid");

const HTTPError = require("../models/http-error");

const USERS = [
  {
    id: "u1",
    name: "nix",
    email: "neetikasood@gmail.com",
    password: "done",
  },
  {
    id: "u2",
    name: "nix1",
    email: "neetikasood1@gmail.com",
    password: "done1",
  },
];

const getUsers = (req, res, next) => {
  res.status(200).json({ users: USERS });
};

const createUser = (req, res, next) => {
  const { name, email, password } = req.body;
  const newUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };
  USERS.push(newUser);
  res.status(201).json({ user: newUser });
};

const loginUser = (req, res, next) => {
  const { email, password } = req.body;
  const userFound = USERS.find((user) => email === user.email);

  console.log(userFound);
  if (!userFound) {
    return next(new HTTPError("user not found", 422));
  }
  if (userFound.password !== password) {
    return next(new HTTPError("user not found wrong password", 401));
  }
  res.status(201).json({ message: "user found" });
};

exports.getUsers = getUsers;
exports.createUser = createUser;
exports.loginUser = loginUser;
