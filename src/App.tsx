import React from "react";
import PostForm from "./components/PostForm";
import User from "./components/User";
import { useSelector } from "react-redux";
import Post from "./components/Post";
import { AppState, TPost } from "./types/types";
import { isEmpty } from "./components/Utils";

const App = () => {
  const postItems = useSelector((state: AppState) => state.postReducer);

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {!isEmpty(postItems) && postItems.map((post: TPost, index: number) => (
            <Post post={post} key={index} />
          ))}
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;
