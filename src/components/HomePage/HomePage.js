import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetchMovies from '../../fetchMovies';

export default class HomePage extends Component {
	state = {
		results: [],
	};

	componentDidMount() {
		fetchMovies
			.fetchPopularMovies()
			.then(results => this.setState({ results }));
	}

	render() {
		// console.log('res', this.state);
		return (
			<>
				<h1>Trending today</h1>
				<ul>
					{this.state.results.map(result => (
						<li key={result.id}>
							<Link
								to={{
									pathname: `/movies/${result.id}`,
									state: { from: this.props.location },
								}}
							>
								{result.title || result.name}
							</Link>
						</li>
					))}
				</ul>
			</>
		);
	}
}
