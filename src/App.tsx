import React from 'react';
import {Route} from "react-router-dom";

import store from "./redux/redux-store";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import ProfileContainer from "./components/Profile/ProfileContainer";
import './App.css';
import UsersContainer from "./components/Users/UsersContainer";

const App: React.FC = () => {
  const state = store.getState();
  
  return (
    <div className="app-wrapper">
      <Header/>
      <main>
        <Navigation sidebarMenu={state.sidebar.sidebarMenu}/>
        <div className="content-body">
          <Route path="/profile"
                 render={() => <ProfileContainer
                 />}/>
          <Route path="/users"
                 render={() => <UsersContainer
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
};

export default App;
