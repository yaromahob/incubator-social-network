import {setAuthUserDataAC} from "../setAuthUserDataAC";

export type AuthDataType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

export type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>

export type ActionsAuthTypes = setAuthUserDataACType