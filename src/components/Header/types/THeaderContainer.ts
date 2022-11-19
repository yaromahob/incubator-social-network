import {ActionsAuthTypes, AuthDataType, setAuthUserDataACType} from "../../../redux/actions/types/TAuth";
import {setAuthUserDataAC} from "../../../redux/actions/setAuthUserDataAC";
import {authMeThunk} from "../../../redux/asyncActions/getUsersThunk";

export type MapDispatchToPropsType = {
  setAuthUserDataAC: (userId: number, email: string, login: string) => void
  authMeThunk: () => void
}

export type AuthClassPropsType = MapDispatchToPropsType & AuthDataType