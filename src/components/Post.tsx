import React, { useState } from "react";
import Like from "./Like";
import { AppState, TPost } from "../types/types";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";
import { store } from "..";
import { deletePost, editPost } from "../actions/post.action";

interface PostProps {
  post: TPost; // Assuming TPost is the type for your post data
}

export default function Post({ post }: PostProps) {
  const [editToggle, setEditToggle] = useState(false);
  const [editContent, setEditContent] = useState(post.content);

  const userItem = useSelector((state: AppState) => state.userReducer);

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    const postData = { ...post, content: editContent };

    store.dispatch(editPost(postData));
    setEditToggle(false);
  }

  return (
    <div className="post">
      {!isEmpty(userItem) && userItem.pseudo === post.author && (
        <div className="edit-delete">
          <img
            src="./icons/edit.svg"
            alt="edit"
            onClick={() => setEditToggle(!editToggle)}
          />
          <img
            src="./icons/delete.svg"
            alt="delete" 
            onClick={() => store.dispatch(deletePost(post.id))}
          />
        </div>
      )}

      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />

      {editToggle ? (
        <form onSubmit={(e: React.FormEvent) => handleEdit(e)}>
          <textarea autoFocus={true} defaultValue={post.content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEditContent(e.target.value)}></textarea>
          <input type="submit" value="Valider modification" />
        </form>
      ) : (
        <p>{post.content}</p>
      )}

      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
}