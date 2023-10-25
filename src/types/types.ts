// types.ts

import { AnyAction } from "redux";
import { CREATE_POST } from "../actions/post.action";

// Define the structure of a single post
export type TPost = {
  id: string;
  title: string;
  content: string;
  author: string;
  likes: number;
};

// Define the structure of a single user
export type TUser = {
  id: number;
  pseudo: string;
  age: number;
  likes: number;
};

// Define the structure of the app's state
export interface AppState {
  postReducer: TPost[]; // An array of posts
  userReducer: TUser;
}
