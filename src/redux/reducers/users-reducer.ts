import {UsersActionType} from "../actions/types/TUsersAC";
import {CHANGE_CURRENT_PAGE, FOLLOW_FRIEND, SET_USERS, UNFOLLOW_FRIEND} from "../actions/usersAC";
import {UsersType} from "./types/TUsers";


const initialState: UsersType = {
  items: [],
  currentPage: 1,
  pageRenderUserSize: 9,
  totalUserCount: 0,
  isFetching: false
};

export const usersReducer = (state: UsersType = initialState, action: UsersActionType): UsersType => {
  
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        items: action.payload.users,
        totalUserCount: action.payload.totalUsersCount
      };
    }
    
    case CHANGE_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload.pageNumber
      };
    }
    
    case FOLLOW_FRIEND: {
      return {
        ...state,
        items: state.items.map(u => u.id === action.payload ? {...u, followed: true} : u)
      };
    }
    case UNFOLLOW_FRIEND: {
      
      return {
        ...state,
        items: state.items.map(u => u.id === action.payload ? {...u, followed: false} : u)
      };
    }
    
    case "TOGGLE-IS-FETCHING": {
      return {
        ...state,
        isFetching: action.payload
      };
    }
    
    default: {
      return state;
    }
    
  }
  
};