import React from 'react';
import {Route} from "react-router-dom";

import store from "./redux/redux-store";
import Navigation from "./components/Navigation/Navigation";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import ProfileContainer from "./components/Profile/ProfileContainer";
import './App.css';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App: React.FC = () => {
  const state = store.getState();
  
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <main>
        <Navigation sidebarMenu={state.sidebar.sidebarMenu}/>
        <div className="content-body">
          <Route path="/profile/:userId?"
                 render={() => <ProfileContainer/>}
          />
          <Route path="/users"
                 render={() => <UsersContainer/>}
          />
          <Route path="/messages"
                 render={() => <Messages
                   state={state.messagesPage}/>}/>
          
          <Route path="/login"
                 render={() => <Login/>}/>
        </div>
      </main>
      <footer>footer yaromahob</footer>
    </div>
  );
};

export default App;
