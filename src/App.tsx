import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

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
          <div className="content-body">
            <Route exact path="/profile" render={() => <Profile/>}/>
            <Route path="/messages" render={() => <Messages/>}/>
            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
          </div>
        </main>
        <footer>footer yaromahob</footer>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
