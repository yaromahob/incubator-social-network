import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addLikeCallback, newPostCallback} from './redux/state';

export let rerenderEntireTree = (state: any) => {
	ReactDOM.render(
		<BrowserRouter>
			<App
				state={state}
				newPostCallback={newPostCallback}
				addLikeCallback={addLikeCallback}/>
		</BrowserRouter>
		,
		document.getElementById('root')
	);

}