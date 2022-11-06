export type ProfileActionType = AddPostACType | UpdatePostTextACType | AddLikePostACType

type AddPostACType = ReturnType<typeof addPostAC>
type UpdatePostTextACType = ReturnType<typeof updatePostTextAC>
type AddLikePostACType = ReturnType<typeof addLikePost>

export const addPostAC = (message: string) => {
  return {
    type: 'ADD-POST',
    payload: message
  } as const
}

export const updatePostTextAC = (text: string) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    payload: text
  } as const
}

export  const addLikePost = (id: string) => {
  return {
    type: 'ADD-LIKE',
    payload: id
  } as const
}


