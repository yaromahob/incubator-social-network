import {TProfilePage} from "../../../redux/reducers/types/TProfile";

import {RouteComponentProps} from "react-router-dom";


export type mapDispatchToPropsType = {
  updatePostTextAC: (text: string) => void
  addPostAC: (post: string) => void
  addLikePostAC: (id: string) => void
  getProfileUserThunk: (userID: number) => void
}

export type TProfileClassPropsType = TProfilePage & mapDispatchToPropsType

export type PathParamType = {
  userID: string
}

export type CommonProfileWithUrlType = RouteComponentProps<PathParamType> & TProfileClassPropsType