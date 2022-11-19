import {TProfilePage, TProfileResponse, TUserPost} from "../../../redux/reducers/types/TProfile";
import {setProfileAC} from "../../../redux/actions/profileAC";
import profile from "../Profile";
import {RouteComponentProps} from "react-router-dom";


export type mapDispatchToPropsType = {
  userPosts: TUserPost[]
  newPost: string
  profile: TProfileResponse,
  updatePostTextAC: (text: string) => void
  addPostAC: (post: string) => void
  addLikePostAC: (id: string) => void
  getProfileUserThunk: (userID: number) => void
}

export type TProfileClassPropsType = TProfilePage & mapDispatchToPropsType

export type PathParamType = {
  userId: string
}

export type CommonProfileWithUrlType = RouteComponentProps<PathParamType> & TProfileClassPropsType