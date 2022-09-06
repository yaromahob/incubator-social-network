import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";

const App: React.FC = () => {
  
  return (
    <div className='app-wrapper'>
      <Header/>
      <main>
        <Navigation/>
        <Profile/>
      </main>
      <footer>footer yaromahob</footer>
    </div>
  );
}

export default App;
