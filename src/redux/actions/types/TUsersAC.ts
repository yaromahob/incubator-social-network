import {
  changeUsersPageAC,
  followFriendAC,
  isDisabledButtonAC,
  setUsersAC,
  toggleIsFetchingAC,
  unFollowFriendAC
} from "../usersAC";

export type UsersActionsType =
  FollowFriendACType
  | UnFollowFriendACType
  | SetUsersACType
  | ChangeUsersPageACType
  | ToggleIsFetchingACType
  | isDisabledButtonACType

export type FollowFriendACType = ReturnType<typeof followFriendAC>
export type UnFollowFriendACType = ReturnType<typeof unFollowFriendAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type ChangeUsersPageACType = ReturnType<typeof changeUsersPageAC>
export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export type isDisabledButtonACType = ReturnType<typeof isDisabledButtonAC>