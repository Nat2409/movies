import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export default class SearchBox extends Component {
	state = {
		value: '',
	};

	handleChange = e => {
		this.setState({ value: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.handleSearchQuery(this.state.value);
		this.setState({ value: '' });
	};

	render() {
		return (
			<form>
				<input
					type="search"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<button type="submit" onClick={this.handleSubmit}>
					Search
				</button>
			</form>
		);
	}
}
