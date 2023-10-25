import React from "react";
import { AppState, TPost, TUser } from "../types/types";
import { store } from "..";
import { addPostLike } from "../actions/post.action";
import { useSelector } from "react-redux";
import { addUserLike } from "../actions/user.action";

const Like = ({ post }: any) => {
  const userItem = useSelector((state: AppState) => state.userReducer);

  const handleLike = () => {
    const postData: TPost = { ...post, likes: post.likes + 1 };
    const userData : TUser = {...userItem, likes : userItem.likes + 1 }
    store.dispatch(addPostLike(postData));
    store.dispatch(addUserLike(userData));
  }

  return (
    <div>
      <img src="./icons/clap.png" className="clap" alt="clap"
        onClick={() => handleLike()} />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
