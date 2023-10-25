import { ADD_USER_LIKES, GET_USER } from "../actions/user.action";
import { TUser } from "../types/types";

interface SomeAction {
    type: string;
    payload: any; // Replace 'any' with the specific payload type
}

const initialState = {};

export default function userReducer(state = initialState, action: SomeAction) {
    //switch
    switch (action.type) {
        case GET_USER: return action.payload;
        case ADD_USER_LIKES: return {
            ...state,
            likes: action.payload.likes
        };
        default: return state;
    }
}