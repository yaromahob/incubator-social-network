import {ActionsAuthTypes, AuthDataType, setAuthUserDataACType} from "../../../redux/reducers/types/TAuth";
import {setAuthUserDataAC} from "../../../redux/actions/setAuthUserDataAC";

export type MapDispatchToPropsType = {
  setAuthUserDataAC: (userId: number, email: string, login: string) => void
}

export type AuthClassPropsType = MapDispatchToPropsType & AuthDataType