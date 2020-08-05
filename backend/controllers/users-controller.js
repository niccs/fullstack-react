const { v4: uuidv4 } = require("uuid");

const USERS = [
  {
    id: "u1",
    image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    name: "nix",
    description: "done",
  },
  {
    id: "u2",
    image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    name: "nix2",
    description: "done",
  },
];

const getUsers = (req, res, next) => {
  res.status(200).json({ users: USERS });
};

const createUser = (req, res, next) => {
  const { image, name, description } = req.body;
  const newUser = {
    id: uuidv4(),
    image,
    name,
    description,
  };
  USERS.push(newUser);
  res.status(201).json({ user: newUser });
};

const loginUser = (req, res, next) => {
  res.status(201).json({ message: "user created" });
};

exports.getUsers = getUsers;
exports.createUser = createUser;
exports.loginUser = loginUser;
