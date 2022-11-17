import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {messagesReducer} from "./reducers/messages-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {usersReducer} from "./reducers/users-reducer";


const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer
});

export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer);

export default store;