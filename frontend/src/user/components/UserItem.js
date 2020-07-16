import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./../../common/components/uiElements/Avatar";
import "./UserItem.css";
import Card from "./../../common/components/uiElements/Card";

const UserItem = ({ user }) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${user.id}/places`}>
          <div className="user-item__image">
            <Avatar user={user} />
          </div>
          <div className="user-item__info">
            <h2>{user.name}</h2>
            <h3>{user.description}</h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};
export default UserItem;
