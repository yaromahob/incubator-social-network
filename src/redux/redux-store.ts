import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {messagesReducer} from "./reducers/messages-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";


const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebar: sidebarReducer
});

export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store
let store = createStore(rootReducer);

export default store;