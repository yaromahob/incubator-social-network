import {addLikePostAC, addPostAC, getStatusAC, setProfileAC, setStatusAC, updatePostTextAC} from "../profileAC";

export type ProfileActionsType =
  AddPostACType
  | UpdatePostTextACType
  | AddLikePostACType
  | SetProfileAC
  | SetStatusAC
  | GetStatusAC

export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdatePostTextACType = ReturnType<typeof updatePostTextAC>
export type AddLikePostACType = ReturnType<typeof addLikePostAC>
export type SetProfileAC = ReturnType<typeof setProfileAC>
export type SetStatusAC = ReturnType<typeof setStatusAC>
export type GetStatusAC = ReturnType<typeof getStatusAC>