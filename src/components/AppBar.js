import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

export default function AppBar() {
	return (
		<ul>
			<li>
				<NavLink to={routes.home}>Home</NavLink>
			</li>
			<li>
				<NavLink to={routes.movies}>Movies</NavLink>
			</li>
		</ul>
	);
}
