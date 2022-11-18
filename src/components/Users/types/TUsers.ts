import {UserType} from "../../../redux/reducers/types/TUsers";

export type UsersComponentType = {
  items: Array<UserType>
  totalUserCount: number
  currentPage: number
  pageRenderUserSize: number
  onChangePage: (pageNumber: number) => void
  followSuccessThunkHandler: (userID: number) => void
  unFollowSuccessThunkHandler: (userID: number) => void
  isFetching: boolean
  isDisabledButton: Array<number>
}