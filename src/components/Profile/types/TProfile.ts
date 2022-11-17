import {TUserPost} from "../../../redux/reducers/types/TProfile_reducer";

export type TStatePostType = {
  postUser: TUserPost[]
  newPost: string
  updatePostCallback: (text: string) => void
  addPostCallback: (post: string) => void
  addLikeCallback: (id: string) => void
}