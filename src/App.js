// 3ca4f0fa98e22b27d06819a16b26fd68
// https://api.themoviedb.org/3/movie/550?api_key=3ca4f0fa98e22b27d06819a16b26fd68
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import AppBar from './components/AppBar';
import routes from './routes';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';

function App() {
	return (
		<>
			<AppBar />
			<hr />
			<Route path={routes.home} exact component={HomePage} />
			<Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
			<Route path={routes.movies} exact component={MoviesPage} />

			{/* <Route path={routes.cast} component={Cast} />
			<Route path={routes.reviews} component={Reviews} /> */}

			{/* <hr /> */}
		</>
	);
}

export default App;
