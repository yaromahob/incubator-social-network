import {v1} from "uuid";

export type TUserData = {
  id: string
  user: string
  directory: string
  avatar: string
}

export const USERS_DATA: Array<TUserData> = [
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
];