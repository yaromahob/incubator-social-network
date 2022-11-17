export type TProfilePage = {
  userPosts: TUserPost[]
  newPost: string
}

export type TUserPost = {
  id: string
  message: string
  likesCount: number
}