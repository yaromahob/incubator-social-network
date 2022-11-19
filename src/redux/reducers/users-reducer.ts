import {UsersType} from "../../components/Users/types/TUsersContainer";
import {UsersActionsType} from "../actions/types/TUsersAC";
import {
  CHANGE_CURRENT_PAGE,
  FOLLOW_FRIEND,
  IS_DISABLED_BUTTON,
  SET_USERS,
  TOGGLE_IS_FETCHING,
  UNFOLLOW_FRIEND
} from "../actions/usersAC";


const initialState: UsersType = {
  items: [],
  currentPage: 1,
  pageRenderUserSize: 9,
  totalUserCount: 0,
  isFetching: false,
  isDisabledButton: []
};


export const usersReducer = (state: UsersType = initialState, action: UsersActionsType): UsersType => {
  
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
    
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      };
    }
    
    case IS_DISABLED_BUTTON: {
      return {
        ...state,
        isDisabledButton: action.payload.isDisabled
          ? [...state.isDisabledButton, action.payload.userId]
          : [...state.isDisabledButton.filter(id => id !== action.payload.userId)]
      };
    }
    
    default: {
      return state;
    }
    
  }
  
};