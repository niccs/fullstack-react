import React from "react";

import UserItem from "./UserItem";
import Card from "./../../common/components/uiElements/Card";
import "./UsersList.css";

const UserLists = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <Card>
          <h2>The list is empty</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserLists;
