import {UsersActionType} from "../actions/types/TUsersAC";
import {UsersType} from "./types/TUsers_reducer";


let initialState: UsersType = {
  items: [],
  currentPage: 1,
  pageRenderUserSize: 9,
  totalUserCount: 0
};

export const usersReducer = (state: UsersType = initialState, action: UsersActionType): UsersType => {
  
  switch (action.type) {
    case "SET-USERS": {
      return {
        ...state,
        items: action.payload.users,
        totalUserCount: action.payload.totalUsersCount
      };
    }
    
    case 'CHANGE-CURRENT-PAGE': {
      return {
        ...state,
        currentPage: action.payload.pageNumber
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