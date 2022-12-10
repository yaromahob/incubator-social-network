import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {messagesReducer} from "./reducers/messages-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/authMe-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {UsersActionsType} from "./actions/types/TUsersAC";
import {ProfileActionsType} from "./actions/types/TProfileAC";
import {ActionsAuthTypes} from "./actions/types/TAuth";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppStateType = ReturnType<typeof rootReducer>
export type AppActionsType = UsersActionsType | ProfileActionsType | ActionsAuthTypes

// универсальная типизация thunk для того, чтобы если будет thunk в thunk
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

export default store;


