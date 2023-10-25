import axios from "axios";
import { Dispatch } from "redux"; // Import Dispatch type from Redux
import { TUser } from "../types/types";

export const GET_USER = "GET_USER";
export const ADD_USER_LIKES = "ADD_USER_LIKES";

export const getUser = () => {
    return (dispatch: Dispatch) => {
        return axios.get("http://localhost:3000/user")
            .then((res) => {
                dispatch({type: GET_USER, payload: res.data[0]})
            })
    }
}

export const addUserLike = (userData: TUser) => {
    return (dispatch: Dispatch) => {
        return axios.put(`http://localhost:3000/user/${userData.id}`, userData)
            .then((res) => {
                dispatch({type: ADD_USER_LIKES, payload: userData})
            })
    }
}