import React from 'react'
import {Link} from "react-router-dom";
import {TSidebarMenu} from '../../App';
import './Navigation.css'


type TSidebarMenuProps = {
	sidebarMenu: TSidebarMenu[]
}

const Navigation: React.FC<TSidebarMenuProps> = (props) => {
	const [activeDirectory, setActiveDirectory] = React.useState('/')
	const onChangeFolder = (index: number) => {

		setActiveDirectory(props.sidebarMenu[index].directory)
	}

	return (

		<nav>
			<ul>
				{props.sidebarMenu.map((item: TSidebarMenu, index: number) => {
					return (
						<li key={index}>
							<Link
								onClick={() => onChangeFolder(index)}
								className={activeDirectory === item.directory ? 'active' : ''}
								to={item.directory}>
								{item.folder}
							</Link>
						</li>)
				})}

			</ul>


		</nav>


	)
}

export default Navigation