import {v1} from "uuid";
import {ProfileActionType} from "../actions/types/TProfileAC";
import {TProfilePage} from "./types/TProfile_reducer";


const initialState: TProfilePage = {
  userPosts: [
    {id: v1(), message: 'Hi, how are you?', likesCount: 10},
    {id: v1(), message: 'It is my first post', likesCount: 12},
    {id: v1(), message: 'ALLO', likesCount: 15},
    {id: v1(), message: 'DAROVA BRAT', likesCount: 99},
  ],
  newPost: ''
};

export const profileReducer = (state: TProfilePage = initialState, action: ProfileActionType): TProfilePage => {
  
  switch (action.type) {
    case "ADD-POST": {
      let post = {
        id: v1(),
        message: action.payload,
        likesCount: 0
      };
      return {...state, userPosts: [...state.userPosts, post], newPost: ''};
    }
    case "UPDATE-NEW-POST-TEXT": {
      return {userPosts: state.userPosts, newPost: action.payload};
    }
    case "ADD-LIKE": {
      return {
        userPosts: [...state.userPosts.map(p =>
          p.id === action.payload
            ? {...p, likesCount: p.likesCount + 1}
            : p)],
        newPost: ''
      };
    }
    default: {
      return state;
    }
    
  }
  
};
