import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import News from "./components/News";
import Music from "./components/Music";

const App: React.FC = () => {
  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <main>
          <Navigation/>
          <Switch>
            <Route exact path="/profile">
              <Profile/>
            </Route>
            <Route path="/messages">
              <Messages/>
            </Route>
            <Route path="/news">
              <News/>
            </Route>
            <Route path="/music">
              <Music/>
            </Route>
          </Switch>
        </main>
        <footer>footer yaromahob</footer>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
