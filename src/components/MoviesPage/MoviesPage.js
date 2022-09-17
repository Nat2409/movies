import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetchMovies from '../../fetchMovies';
import SearchBox from '../SearchBox';
import getQueryParams from '../../utils/getQueryParams';

export default class MoviesPage extends Component {
	state = {
		results: [],
	};

	componentDidMount() {
		const { query } = getQueryParams(this.props.location.search);
		if (query) {
			this.fetchQuery(query);
		}
	}
	componentDidUpdate(prevProps, prevState) {
		const { query: prevQuery } = getQueryParams(prevProps.location.search);
		// console.log('prevparams', prevQuery);

		const { query: nextQuery } = getQueryParams(this.props.location.search);
		// console.log('nextParam', nextQuery);
		if (prevQuery !== nextQuery) {
			this.fetchQuery(nextQuery);
		}
	}

	fetchQuery = query => {
		return fetchMovies
			.fetchSearchMovies(query)
			.then(results => this.setState({ results }));
	};

	handleSearch = query => {
		this.props.history.push({
			...this.props.location,
			search: `query=${query}`,
		});
	};

	render() {
		const { results } = this.state;
		return (
			<>
				<SearchBox handleSearchQuery={this.handleSearch} />
				<ul>
					{results.length > 0 &&
						results.map(result => (
							<li key={result.id}>
								<Link
									to={{
										pathname: `${this.props.match.url}/${result.id}`,
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
