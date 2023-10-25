import { ADD_POST_LIKE, CREATE_POST, DELETE_POST, EDIT_POST, GET_POSTS } from "../actions/post.action";
import { TPost } from "../types/types";

interface SomeAction {
    type: string;
    payload: any; // Replace 'any' with the specific payload type
}

const initialState: TPost[] = [];

export default function postReducer(state = initialState, action: SomeAction) {
    //switch
    switch (action.type) {
        case GET_POSTS: return action.payload;
        case CREATE_POST: return [action.payload, ...state];
        case EDIT_POST: return state.map((post: TPost) => {
            if (post.id === action.payload.id) {
                return {
                    ...post,
                    content: action.payload.content
                }
            }else return post;
        });
        case ADD_POST_LIKE : return state.map((post: TPost) => {
            if (post.id === action.payload.id) {
                return {
                    ...post,
                    likes: action.payload.likes
                }
            }else return post;
        });
        case DELETE_POST: return state.filter((post:TPost)=>post.id != action.payload);
        default: return state;
    }
}