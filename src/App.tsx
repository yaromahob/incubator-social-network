import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";


import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {TUserData, TUserMessages, TUserPost} from "./redux/state";

type TUserDataType = {
	userData: TUserData[]
	userPosts: TUserPost[]
	userMessages: TUserMessages[]
}

type TAppState = {
	appState: TUserDataType
}

const App: React.FC<TAppState> = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header/>
				<main>
					<Navigation/>
					<div className="content-body">
						<Route path="/profile"
									 render={() => <Profile userPosts={props.appState.userPosts}/>}/>
						<Route path="/messages"
									 render={() => <Messages userData={props.appState.userData}
																					 userMessages={props.appState.userMessages}/>}/>
						<Route path="/news"
									 render={() => <News/>}/>
						<Route path="/music"
									 render={() => <Music/>}/>
					</div>
				</main>
				<footer>footer yaromahob</footer>
			</div>

		</BrowserRouter>
	);
}

export default App;
