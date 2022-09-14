import React from 'react';
const base = {
	url: 'https://api.themoviedb.org/3',
	key: '?api_key=3ca4f0fa98e22b27d06819a16b26fd68',
};
function fetchPopularMovies() {
	return fetch(`${base.url}/trending/all/day${base.key}`)
		.then(res => res.json())
		.then(data => data.results);
}
function fetchMovieDetails(movieId) {
	return fetch(`${base.url}/movie/${movieId}${base.key}`).then(res =>
		res.json(),
	);
}
function fetchCast(movieId) {
	return fetch(`${base.url}/movie/${movieId}/credits${base.key}`)
		.then(res => res.json())
		.then(data => data.cast);
}
function fetchReviews(movieId) {
	return fetch(`${base.url}/movie/${movieId}/reviews${base.key}`)
		.then(res => res.json())
		.then(data => data.results);
}
function fetchSearchMovies(searchQuery) {
	return fetch(`${base.url}/search/movie${base.key}&query=${searchQuery}`)
		.then(res => res.json())
		.then(data => data.results);
}
export default {
	fetchPopularMovies,
	fetchMovieDetails,
	fetchCast,
	fetchReviews,
	fetchSearchMovies,
};
