import {v1} from "uuid";

export type TUserData = {
  id: string
  user: string
  directory: string
  avatar: string
}

export type TUserMessages = {
  id: string
  message: string
}
export type TMessagesPage = {
  userData: TUserData[]
  userMessages: TUserMessages[]
}

const initialState:TMessagesPage = {
  userData: [
    {
      id: v1(),
      user: 'Dimych',
      directory: '/dimych',
      avatar: 'https://www.svgrepo.com/show/92403/avatar.svg'
    },
    {
      id: v1(),
      user: 'Andrey',
      directory: '/andrey',
      avatar: 'https://www.svgrepo.com/show/43652/avatar.svg'
    },
    {
      id: v1(),
      user: 'Sveta',
      directory: '/sveta',
      avatar: 'https://www.svgrepo.com/show/79566/avatar.svg'
    },
    {
      id: v1(),
      user: 'Sasha',
      directory: '/sasha',
      avatar: 'https://www.svgrepo.com/show/61986/avatar.svg'
    },
    {
      id: v1(),
      user: 'Viktor',
      directory: '/viktor',
      avatar: 'https://www.svgrepo.com/show/63886/avatar.svg'
    },
    {
      id: v1(),
      user: 'Valera',
      directory: '/valera',
      avatar: 'https://www.svgrepo.com/show/57853/avatar.svg'
    },
  ],
  userMessages: [
    {id: v1(), message: 'Hi'},
    {id: v1(), message: 'I am fine and you?'},
    {id: v1(), message: 'I am fine too. What you do?'},
    {id: v1(), message: 'Nothing and you?'},
    {id: v1(), message: 'I am going home. '},
  ],
}

export const messagesReducer = (state:any = initialState, action:any):TMessagesPage => {
  return state
}