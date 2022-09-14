import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import fetchMovies from '../../fetchMovies';
import routes from '../../routes';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import styles from './MovieDetailsPage.module.css';

export default class MovieDetailsPage extends Component {
	state = {
		movie: null,
	};

	componentDidMount() {
		fetchMovies
			.fetchMovieDetails(this.props.match.params.movieId)
			.then(movie => this.setState({ movie }));
	}

	handleGoBack = () => {
		console.log('back');
		if (this.props.location.state && this.props.location.state.from) {
			return this.props.history.push(this.props.location.state.from);
		}
		this.props.history.push(routes.home);
	};

	render() {
		const { movie } = this.state;

		return (
			<>
				<button type="button" onClick={this.handleGoBack}>
					Go back
				</button>
				<br />
				{movie && (
					<>
						<div className={styles.flexBox}>
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.original_title}
								width="200px"
							/>
							<div className={styles.description}>
								<h2>{movie.original_title}</h2>
								<p>User score: {Math.trunc(movie.vote_average * 10)}%</p>
								<h3>Overview</h3>
								<p>{movie.overview}</p>
								<h3>Genres</h3>
								<p>
									{movie.genres && movie.genres.map(genre => genre.name + ' ')}
								</p>
							</div>
						</div>
						<hr />
						<p>Aditional information</p>
						<ul>
							<li>
								<NavLink
									className="NavLink"
									activeClassName="NavLinkActive"
									to={{
										pathname: `${this.props.match.url}/cast`,
										state: this.props.location.state,
									}}
								>
									Cast
								</NavLink>
							</li>
							<li>
								<NavLink
									className="NavLink"
									activeClassName="NavLinkActive"
									to={{
										pathname: `${this.props.match.url}/reviews`,
										state: this.props.location.state,
									}}
								>
									Reviews
								</NavLink>
							</li>
						</ul>
						<hr />
					</>
				)}

				<Route path={`${this.props.match.path}/cast`} exact component={Cast} />
				<Route
					path={`${this.props.match.path}/reviews`}
					exact
					component={Reviews}
				/>
			</>
		);
	}
}
