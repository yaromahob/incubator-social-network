import {TUserData} from "../../../Dataset/users";

export type TUserMessages = {
  id: string
  message: string
}
export type TMessagesPage = {
  userData: TUserData[]
  userMessages: TUserMessages[]
}