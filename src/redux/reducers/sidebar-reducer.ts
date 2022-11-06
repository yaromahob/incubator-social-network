
export type TSidebar = {
  sidebarMenu: TSidebarMenu[]
}

export type TSidebarMenu = {
  folder: string
  directory: string
}

const initialState: TSidebar =  {
  sidebarMenu: [
    {
      folder: 'Profile',
      directory: '/profile'
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
}

export const sidebarReducer = (state:any = initialState, action:any): TSidebar => {
  return state
}