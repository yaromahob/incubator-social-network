import {UsersActionType} from "../actions/usersAC";


export type UserType = {
  name: string
  id: number
  uniqueUrlName: null | string
  photos: { small: string, large: string }
  status: null | string
  followed: boolean
}
export type UsersType = {
  items: Array<UserType>
}
let initialState: UsersType = {
  items: []
  
};

export const usersReducer = (state: UsersType = initialState, action: UsersActionType) => {
  
  switch (action.type) {
    case "SET-USERS": {
      return {
        ...state,
        items: action.payload
      };
    }
    case "FOLLOW-FRIEND": {
      return {
        ...state,
        items: state.items.map(u => u.id === action.payload ? {...u, followed: true} : u)
      };
    }
    case "UNFOLLOW-FRIEND": {
      
      return {
        ...state,
        items: state.items.map(u => u.id === action.payload ? {...u, followed: false} : u)
      };
    }
    default: {
      return state;
    }
    
  }
  
};