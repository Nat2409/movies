import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// import HomePage from './components/HomePage/HomePage';
// import MoviesPage from './components/MoviesPage/MoviesPage';
// import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import AppBar from './components/AppBar';
import routes from './routes';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';

const asyncHomePage = lazy(() =>
	import('./components/HomePage/HomePage' /*webpackChunkName: "home-page" */),
);
const asyncMoviesPage = lazy(() =>
	import(
		'./components/MoviesPage/MoviesPage' /*webpackChunkName: "movies-page" */
	),
);
const asyncMovieDetailsPage = lazy(() =>
	import(
		'./components/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "movie-details-page" */
	),
);

function App() {
	return (
		<>
			<AppBar />
			<hr />
			<Suspense fallback={<h2>Loading...</h2>}>
				<Switch>
					<Route path={routes.home} exact component={asyncHomePage} />
					<Route
						path={routes.movieDetailsPage}
						component={asyncMovieDetailsPage}
					/>
					<Route path={routes.movies} exact component={asyncMoviesPage} />
					{/* <Route path={routes.cast} component={Cast} />
			<Route path={routes.reviews} component={Reviews} /> */}
				</Switch>
			</Suspense>
		</>
	);
}

export default App;
