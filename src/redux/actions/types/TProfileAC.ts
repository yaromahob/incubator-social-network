import {addLikePostAC, addPostAC, setProfileAC, updatePostTextAC} from "../profileAC";

export type ProfileActionsType = AddPostACType | UpdatePostTextACType | AddLikePostACType | SetProfileAC

export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdatePostTextACType = ReturnType<typeof updatePostTextAC>
export type AddLikePostACType = ReturnType<typeof addLikePostAC>
export type SetProfileAC = ReturnType<typeof setProfileAC>