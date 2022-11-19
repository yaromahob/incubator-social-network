import {UserType} from "../../../redux/reducers/types/TUsers";

export type UsersType = {
  items: Array<UserType>
  currentPage: number
  pageRenderUserSize: number
  totalUserCount: number
  isFetching: boolean
  isDisabledButton: Array<number>
}

export type mapDispatchToPropsType = {
  getUsersThunk: (currentPage: number, pageRenderUserSize: number) => void
  unFollowSuccessThunk: (userID: number) => void
  followSuccessThunk: (userID: number) => void
}
export type UsersClassPropsType = mapDispatchToPropsType & UsersType & { isAuth: boolean }