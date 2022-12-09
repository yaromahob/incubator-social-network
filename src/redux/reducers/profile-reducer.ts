import {v1} from "uuid";
import {ProfileActionsType} from "../actions/types/TProfileAC";
import {TProfilePage} from "./types/TProfile";


const initialState: TProfilePage = {
  userPosts: [
    {id: v1(), message: 'Hi, how are you?', likesCount: 10},
    {id: v1(), message: 'It is my first post', likesCount: 12},
    {id: v1(), message: 'ALLO', likesCount: 15},
    {id: v1(), message: 'DAROVA BRAT', likesCount: 99},
  ],
  newPost: '',
  profile: {
    aboutMe: 'I\'m working on it',
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null
    },
    lookingForAJob: true,
    lookingForAJobDescription: 'Don\'t worry, be happy',
    fullName: 'IVAN IVANOV',
    userId: 1,
    photos: {
      small: 'https://www.svgrepo.com/show/5125/avatar.svg',
      large: 'https://www.svgrepo.com/show/5125/avatar.svg'
    }
  },
  status: ''
};

export const profileReducer = (state: TProfilePage = initialState, action: ProfileActionsType): TProfilePage => {
  
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
      return {...state, userPosts: state.userPosts, newPost: action.payload};
    }
    
    case "ADD-LIKE": {
      return {
        ...state, userPosts: [...state.userPosts.map(p =>
          p.id === action.payload
            ? {...p, likesCount: p.likesCount + 1}
            : p)],
        newPost: ''
      };
    }
    
    case "SET-USER-PROFILE": {
      return {
        ...state, profile: action.payload
      };
    }
    
    case "SET-STATUS": {
      console.log(action.payload);
      return {
        ...state, status: action.payload
      };
    }
    
    case "GET-STATUS": {
      return {
        ...state, status: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
