import {TProfilePage} from "../../../redux/reducers/types/TProfile";

import {RouteComponentProps} from "react-router-dom";


export type mapDispatchToPropsType = {
  updatePostTextAC: (text: string) => void
  addPostAC: (post: string) => void
  addLikePostAC: (id: string) => void
  setStatusAC: (newStatus: string) => void
  getProfileUserThunk: (userID: number) => void
  getStatusUserThunk: (userID: number) => void
  setStatusUserThunk: (status: string) => void
}

export type TProfileClassPropsType = TProfilePage & mapDispatchToPropsType

export type PathParamType = {
  userId: string
}

export type CommonProfileWithUrlType = RouteComponentProps<PathParamType> & TProfileClassPropsType