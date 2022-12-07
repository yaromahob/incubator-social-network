import {TProfileResponse} from "../../../redux/reducers/types/TProfile";

export type TProfileInfoPropsType = {
  profile: TProfileResponse
  status: string
  setStatusUserThunk: (status: string) => void
}