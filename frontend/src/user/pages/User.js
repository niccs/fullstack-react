import React from "react";

import UsersList from "./../components/UsersList";

const User = () => {
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
  return <UsersList items={USERS} />;
};

export default User;
