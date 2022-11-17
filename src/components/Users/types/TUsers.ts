import {UserType} from "../../../redux/reducers/types/TUsers_reducer";

export type UsersComponentType = {
  items: Array<UserType>
  totalUserCount: number
  currentPage: number
  pageRenderUserSize: number
  onChangePage: (pageNumber: number) => void
  unFollowHandler: (userID: number) => void
  followHandler: (userID: number) => void
  isFetching: boolean
}