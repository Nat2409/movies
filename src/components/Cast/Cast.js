import React, { Component } from 'react';
import fetchMovies from '../../fetchMovies';

export default class Cast extends Component {
	state = {
		casts: null,
	};
	componentDidMount() {
		// console.log('this.cast', this.state.casts);
		fetchMovies
			.fetchCast(this.props.match.params.movieId)
			.then(casts => this.setState({ casts }));
	}
	render() {
		// console.log('this.cast', this.state.casts);
		const { casts } = this.state;
		return (
			<>
				{casts && (
					<>
						<ul>
							{casts.map(cast => (
								<li key={cast.id}>
									<img
										src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
										alt={cast.name}
										width="100px"
									/>
									<p>{cast.original_name}</p>
									<p>Character: {cast.character}</p>
								</li>
							))}
						</ul>
					</>
				)}
			</>
		);
	}
}
