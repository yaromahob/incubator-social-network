import React from 'react';
import {Route} from "react-router-dom";


import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {TUserData, TUserMessages, TUserPost} from "./redux/state";
import {v1} from 'uuid';

export type TProfilePage = {
	userPosts: TUserPost[]
}

type TMessagePage = {
	userData: TUserData[]
	userMessages: TUserMessages[]
}

export type TSidebarMenu = {
	folder: string
	directory: string
}

type TSidebar = {
	sidebarMenu: TSidebarMenu[]
}

type TUserDataType = {
	profilePage: TProfilePage
	messagesPage: TMessagePage
	sidebar: TSidebar
}

type TAppState = {
	state: TUserDataType
}

const App: React.FC<TAppState> = (props) => {
	const posts = props.state.profilePage.userPosts
	const [postUser, setPostUser] = React.useState<Array<TUserPost>>(posts)
	const newPostCallback = (post: string) => {
		const newPost = {
			id: v1(),
			message: post,
			likesCount: 0
		}
		setPostUser([...postUser, newPost])
	}
	const addLikeCallback = (id: string) => {
		postUser.map(p => {
			if (p.id === id) {
				p.likesCount++
				console.log(p)
			}
		})
		return setPostUser([...postUser])
	}
	return (
		<div className='app-wrapper'>
			<Header/>
			<main>
				<Navigation sidebarMenu={props.state.sidebar.sidebarMenu}/>
				<div className="content-body">
					<Route path="/profile"
								 render={() => <Profile
									 postUser={postUser}
									 newPostCallback={newPostCallback}
									 addLikeCallback={addLikeCallback}/>}/>
					<Route path="/messages"
								 render={() => <Messages
									 state={props.state.messagesPage}/>}/>
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
