import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import CampusList from './CampusList';
import store, { fetchCampuses } from '../store';

export default class Root extends Component {

	componentDidMount () {
		store.dispatch(fetchCampuses());
	}

	render () {
		return (
			<div>
				<Navbar />
				<main>
					<CampusList />
				</main>
			</div>
		)
	}
}