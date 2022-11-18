export type UserType = {
  name: string
  id: number
  uniqueUrlName: null | string
  photos: { small: string, large: string }
  status: null | string
  followed: boolean
}
export type UsersType = {
  items: Array<UserType>
  currentPage: number
  pageRenderUserSize: number
  totalUserCount: number
  isFetching: boolean
  isDisabledButton: Array<number>
}