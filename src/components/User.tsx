import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../types/types";
import { isEmpty } from "./Utils";

const User = () => {
  const userItem = useSelector((state: AppState) => state.userReducer);

  return (
    <div className="user-container">
      <div className="user">
        <h3>{!isEmpty(userItem) && userItem.pseudo}</h3>
        <img src="./img/bill-gates.png" alt="bill gates" />
        <p>Age : {!isEmpty(userItem) && userItem.age} ans</p>
        <p>Like{!isEmpty(userItem) && userItem.likes > 1 ? "s" : ""} : {!isEmpty(userItem) && userItem.likes}</p>
      </div>
    </div>
  );
};

export default User;
