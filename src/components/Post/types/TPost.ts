export type TPostPropsType = {
  id: string
  message: string
  likesCount: number
  addLikeCallback: (id: string) => void
}