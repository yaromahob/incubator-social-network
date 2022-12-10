import {FormStateMap} from "redux-form";

export type TProfilePage = {
  userPosts: TUserPost[]
  newPost: string
  profile: TProfileResponse
  status: string
}

export type TProfileResponse = {
  aboutMe: string,
  contacts: {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
  },
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  userId: number,
  photos: {
    small: string,
    large: string
  }
}

export type TUserPost = {
  id: string
  message: string
  likesCount: number
}