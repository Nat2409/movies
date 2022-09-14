import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

export default function AppBar() {
	return (
		<ul>
			<li>
				<NavLink
					className="NavLink"
					activeClassName="NavLinkActive"
					to={routes.home}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					className="NavLink"
					activeClassName="NavLinkActive"
					to={routes.movies}
				>
					Movies
				</NavLink>
			</li>
		</ul>
	);
}
