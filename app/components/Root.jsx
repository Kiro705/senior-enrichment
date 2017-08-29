import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import CampusList from './CampusList';
import SingleCampus from './SingleCampus';
import StudentList from './StudentList';
import SingleStudent from './SingleStudent';
import Enroll from './Enroll';
import Home from './Home';
import store, { fetchCampuses, fetchStudents } from '../store';

export default class Root extends Component {

	componentDidMount () {
		store.dispatch(fetchCampuses());
		store.dispatch(fetchStudents());
	}

	render () {
		return (
			<div id="rootDIV">
				<Navbar />
				<main>
					<Switch>
						<Route exact path="/home" component={Home} />
						<Route exact path="/campuses" component={CampusList} />
						<Route path="/campuses/:campusId" component={SingleCampus} />
						<Route exact path="/students" component={StudentList} />
						<Route path="/students/:studentId" component={SingleStudent} />
						<Route exact path="/enroll" component={Enroll} />
						<Redirect to="/home" />
					</Switch>
				</main>
			</div>
		)
	}
}