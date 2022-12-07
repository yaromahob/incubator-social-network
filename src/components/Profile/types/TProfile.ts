import {TProfileResponse, TUserPost} from "../../../redux/reducers/types/TProfile";

export type TProfile = {
  userPosts: TUserPost[]
  newPost: string
  profile: TProfileResponse,
  statusUser: string
  updatePostTextAC: (text: string) => void
  addPostAC: (post: string) => void
  addLikePostAC: (id: string) => void
  setStatusUserThunk: (status: string) => void
}