import {TProfilePage, TProfileResponse, TUserPost} from "../../../redux/reducers/types/TProfile_reducer";
import {setProfileAC} from "../../../redux/actions/profileAC";
import profile from "../Profile";


export type mapDispatchToPropsType = {
  userPosts: TUserPost[]
  newPost: string
  profile: TProfileResponse,
  updatePostTextAC: (text: string) => void
  addPostAC: (post: string) => void
  addLikePostAC: (id: string) => void
  setProfileAC: (profile: TProfileResponse) => void
}

export type TProfileClassPropsType = TProfilePage & mapDispatchToPropsType