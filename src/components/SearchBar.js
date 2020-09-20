import React, { Component } from 'react';

export default class SearchBar extends Component {
	state = { term: '' };
	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	};
	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onTermSubmit(this.state.term);
	};

	render() {
		return (
			<div className='search-bar ui segment'>
				<form className='ui form' onSubmit={this.onFormSubmit}>
					<div className='field'>
						<label>Video Search</label>
						<input
							type='text'
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}
