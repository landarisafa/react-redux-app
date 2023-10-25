import axios from "axios";
import { Dispatch } from "redux"; // Import Dispatch type from Redux
import { TPost } from "../types/types";

export const GET_POSTS = "GET_POSTS";
export const CREATE_POST = "CREATE_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST_LIKE = "ADD_POST_LIKE";

export const getPosts = () => {
    return (dispatch: Dispatch) => {
        return axios.get("http://localhost:3000/posts")
            .then((res) => {
                dispatch({ type: GET_POSTS, payload: res.data })
            })
    }
}

// Define the action creator to create a new post
export const createPost = (postData: TPost) => {
    return (dispatch: Dispatch) => {
        // Simulate an API call to create a post and get a response
        return axios.post("http://localhost:3000/posts", postData)// Replace with your actual API call
            .then(response => {
                // Dispatch the action to add the new post to the store
                dispatch({
                    type: CREATE_POST,
                    payload: response.data, // Assuming the response contains the created post data
                });
            })
            .catch(error => {
                // Handle error or dispatch an error action if needed
            });
    };
};

// Define the action creator to EDIT a post
export const editPost = (postData: TPost) => {
    return (dispatch: Dispatch) => {
        // Simulate an API call to create a post and get a response
        return axios.put(`http://localhost:3000/posts/${postData.id}`, postData)// Replace with your actual API call
            .then(response => {
                // Dispatch the action to add the new post to the store
                dispatch({
                    type: EDIT_POST,
                    payload: postData, // Assuming the response contains the created post data
                });
            })
            .catch(error => {
                // Handle error or dispatch an error action if needed
            });
    };
};

// Define the action creator to DELETE a post
export const deletePost = (postId: string) => {
    return (dispatch: Dispatch) => {
        // Simulate an API call to create a post and get a response
        return axios.delete(`http://localhost:3000/posts/${postId}`)// Replace with your actual API call
            .then(response => {
                // Dispatch the action to add the new post to the store
                dispatch({
                    type: DELETE_POST,
                    payload: postId, // Assuming the response contains the created post data
                });
            })
            .catch(error => {
                // Handle error or dispatch an error action if needed
            });
    };
};

// Define the action creator to EDIT a post
export const addPostLike = (postData: TPost) => {
    return (dispatch: Dispatch) => {
        // Simulate an API call to create a post and get a response
        return axios.put(`http://localhost:3000/posts/${postData.id}`, postData)// Replace with your actual API call
            .then(response => {
                // Dispatch the action to add the new post to the store
                dispatch({
                    type: ADD_POST_LIKE,
                    payload: postData, // Assuming the response contains the created post data
                });
            })
            .catch(error => {
                // Handle error or dispatch an error action if needed
            });
    };
};


