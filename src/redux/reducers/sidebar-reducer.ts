import {TSidebar} from "./types/TSidebar";


const initialState: TSidebar = {
  sidebarMenu: [
    {
      folder: 'Profile',
      directory: '/profile'
    },
    {
      folder: 'Users',
      directory: '/users'
    },
    
    {
      folder: 'Messages',
      directory: '/messages'
    },
  
  ]
};

export const sidebarReducer = (state: any = initialState, action: any): TSidebar => {
  return state;
};