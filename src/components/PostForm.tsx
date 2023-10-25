import React, { useRef, RefObject } from "react";
import { AppState, TPost } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../actions/post.action";
import { store } from "..";

const PostForm = () => {
  //const form = useRef();
  const form: RefObject<HTMLFormElement> = useRef(null);
  const userItem = useSelector((state: AppState) => state.userReducer);
  const dispatch = useDispatch();

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();    
    if (form.current) {
      const formData = new FormData(form.current);
      const title = formData.get('title') as string;
      const content = formData.get('content') as string;

      const postData: TPost = {
        author: userItem.pseudo,
        title,
        content,
        likes: 0,
        id:""
      };
      //dispatch(createPost(postData));
      await store.dispatch(createPost(postData));
      store.dispatch(getPosts())
      form.current.reset();
    }

  }

  return (
    <div className="form-container">
      <form ref={form} onSubmit={(e: React.FormEvent) => handleForm(e)}>
        <input type="text" name="title" placeholder="Titre du poste" />
        <textarea name="content" placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
