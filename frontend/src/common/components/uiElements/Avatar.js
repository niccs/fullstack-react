import React from "react";

import "./Avatar.css";

const Avatar = ({ user }) => {
  return (
    <div className="avatar">
      <img src={user.image} alt={user.name} />
    </div>
  );
};

export default Avatar;
