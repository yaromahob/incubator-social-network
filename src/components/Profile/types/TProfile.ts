import {TProfileResponse, TUserPost} from "../../../redux/reducers/types/TProfile_reducer";

export type TProfile = {
  userPosts: TUserPost[]
  newPost: string
  profile: TProfileResponse,
  updatePostTextAC: (text: string) => void
  addPostAC: (post: string) => void
  addLikePostAC: (id: string) => void
}