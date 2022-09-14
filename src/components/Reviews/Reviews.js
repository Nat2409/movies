import React, { Component } from 'react';
import fetchMovies from '../../fetchMovies';

export default class Reviews extends Component {
	state = {
		reviews: [],
	};
	componentDidMount() {
		// console.log('reviews', this.state.reviews);
		fetchMovies
			.fetchReviews(this.props.match.params.movieId)
			.then(reviews => this.setState({ reviews }));
	}
	render() {
		const { reviews } = this.state;
		// console.log('reviews', reviews);
		return (
			<>
				<h2>Reviews</h2>
				{reviews.length > 0 ? (
					<ul>
						{reviews.map(review => (
							<li key={review.id}>
								<h4>Author: {review.author}</h4>
								<p>{review.content}</p>
							</li>
						))}
					</ul>
				) : (
					<p>We don't have any reviews for this movie</p>
				)}
			</>
		);
	}
}
