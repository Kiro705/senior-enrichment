import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import CampusList from './CampusList';
import SingleCampus from './SingleCampus';
import store, { fetchCampuses, fetchStudents } from '../store';

export default class Root extends Component {

	componentDidMount () {
		store.dispatch(fetchCampuses());
		store.dispatch(fetchStudents());
	}

	render () {
		return (
			<div>
				<Navbar />
				<main>
					<Switch>
						<Route exact path="/campuses" component={CampusList} />
						<Route path="/campuses/:campusId" component={SingleCampus} />
					
					</Switch>
				</main>
			</div>
		)
	}
}