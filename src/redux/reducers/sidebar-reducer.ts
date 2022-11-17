import {TSidebar} from "./types/TSidebar_reducer";


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
      folder: 'News',
      directory: '/news'
    },
    {
      folder: 'Messages',
      directory: '/messages'
    },
    {
      folder: 'Music',
      directory: '/music'
    },
  ]
};

export const sidebarReducer = (state: any = initialState, action: any): TSidebar => {
  return state;
};