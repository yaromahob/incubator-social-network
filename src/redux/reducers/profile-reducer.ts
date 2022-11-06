import {v1} from "uuid";
import { ProfileActionType } from "../actions/profileAC";

export type TProfilePage = {
  userPosts: TUserPost[]
  newPost: string
}

export type TUserPost = {
  id: string
  message: string
  likesCount: number
}

const initialState: TProfilePage = {
  userPosts: [
    {id: v1(), message: 'Hi, how are you?', likesCount: 10},
    {id: v1(), message: 'It is my first post', likesCount: 12},
    {id: v1(), message: 'ALLO', likesCount: 15},
    {id: v1(), message: 'DAROVA BRAT', likesCount: 99},
  ],
  newPost: ''
}

export const profileReducer = (state:TProfilePage = initialState, action:ProfileActionType): TProfilePage => {
  
  switch (action.type) {
    case "ADD-POST": {
      let post = {
        id: v1(),
        message: action.payload,
        likesCount: 0
      }
      return {userPosts: [...state.userPosts, post], newPost: ''}
    }
    case "UPDATE-NEW-POST-TEXT": {
      return {userPosts: [...state.userPosts], newPost: action.payload}
    }
    case "ADD-LIKE":{
      const likeAdded = {userPosts: [...state.userPosts.map(p =>
            p.id === action.payload
          ? {...p, likesCount: p.likesCount + 1}
          : p)], newPost: ''}
      return likeAdded
    }
    default:{
      return state
    }
    
  }

}
