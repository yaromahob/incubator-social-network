import {addLikePost, addPostAC, updatePostTextAC} from "../profileAC";

export type ProfileActionType = AddPostACType | UpdatePostTextACType | AddLikePostACType

export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdatePostTextACType = ReturnType<typeof updatePostTextAC>
export type AddLikePostACType = ReturnType<typeof addLikePost>