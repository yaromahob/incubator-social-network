import {v1} from 'uuid'

export type TUserData = {
	id: string
	user: string
	directory: string
	avatar: string
}

export type TUserPost = {
	id: string
	message: string
	likesCount: number
}

export type TUserMessages = {
	id: string
	message: string
}

export const state = {
	messagesPage: {
		userData: [
			{
				id: v1(),
				user: 'Dimych',
				directory: '/dimych',
				avatar: 'https://www.svgrepo.com/show/92403/avatar.svg'
			},
			{
				id: v1(),
				user: 'Andrey',
				directory: '/andrey',
				avatar: 'https://www.svgrepo.com/show/43652/avatar.svg'
			},
			{
				id: v1(),
				user: 'Sveta',
				directory: '/sveta',
				avatar: 'https://www.svgrepo.com/show/79566/avatar.svg'
			},
			{
				id: v1(),
				user: 'Sasha',
				directory: '/sasha',
				avatar: 'https://www.svgrepo.com/show/61986/avatar.svg'
			},
			{
				id: v1(),
				user: 'Viktor',
				directory: '/viktor',
				avatar: 'https://www.svgrepo.com/show/63886/avatar.svg'
			},
			{
				id: v1(),
				user: 'Valera',
				directory: '/valera',
				avatar: 'https://www.svgrepo.com/show/57853/avatar.svg'
			},
		],
		userMessages: [
			{id: v1(), message: 'Hi'},
			{id: v1(), message: 'I am fine and you?'},
			{id: v1(), message: 'I am fine too. What you do?'},
			{id: v1(), message: 'Nothing and you?'},
			{id: v1(), message: 'I am going home. '},
		],
	},
	profilePage: {
		userPosts: [
			{id: v1(), message: 'Hi, how are you?', likesCount: 10},
			{id: v1(), message: 'It is my first post', likesCount: 12},
			{id: v1(), message: 'ALLO', likesCount: 15},
			{id: v1(), message: 'DAROVA BRAT', likesCount: 99},
		],
	},
	sidebar: {
		sidebarMenu: [
			{
				folder: 'Profile',
				directory: '/profile'
			},
			{
				folder: 'News',
				directory: '/news'
			},
			{
				folder: 'Messages',
				directory: '/messages'
			},
			{
				folder: 'Music',
				directory: '/music'
			},
		]
	}
}
