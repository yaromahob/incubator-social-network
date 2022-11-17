import {changeUsersPageAC, followFriendAC, setUsersAC, unFollowFriendAC} from "../usersAC";

export type UsersActionType = FollowFriendACType | UnFollowFriendACType | SetUsersACType | ChangeUsersPageAC

export type FollowFriendACType = ReturnType<typeof followFriendAC>
export type UnFollowFriendACType = ReturnType<typeof unFollowFriendAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type ChangeUsersPageAC = ReturnType<typeof changeUsersPageAC>