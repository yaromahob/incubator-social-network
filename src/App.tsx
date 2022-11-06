import React from 'react';
import {Route} from "react-router-dom";


import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {addLikePost, addPostAC, updatePostTextAC} from "./redux/actions/profileAC";
import store, {AppStateType, StoreType} from "./redux/redux-store";
import ProfileContainer from "./components/Profile/ProfileContainer";


type TAppState = {
    store: StoreType
}

const App: React.FC<TAppState> = (props) => {
    const state = store.getState()
  
    return (
        <div className='app-wrapper'>
            <Header/>
            <main>
                <Navigation sidebarMenu={state.sidebar.sidebarMenu}/>
                <div className="content-body">

                    <Route path="/profile"
                           render={() => <ProfileContainer
                           />}/>

                    <Route path="/messages"
                           render={() => <Messages
                               state={state.messagesPage}/>}/>

                    <Route path="/news"
                           render={() => <News/>}/>

                    <Route path="/music"
                           render={() => <Music/>}/>
                </div>
            </main>
            <footer>footer yaromahob</footer>
        </div>

    );
}

export default App;
