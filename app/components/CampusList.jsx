import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

function CampusesList(props){
	console.log(props.campuses,'**********');
  return (
    <ul className="list-unstyled">
        { props.campuses.map(campus => {
          return (
            <li key={campus.id}>
              <NavLink to={`/campuses/${campus.id}`} activeClassName="active">
                <span>{campus.name}  </span>
                <span className="badge">{ props.students.filter(student => student.campusId === campus.id).length }</span>
              </NavLink>
            </li>
          )
          })
        }
    </ul>
  );
}

const CampusListContainer = withRouter(connect(mapStateToProps)(CampusesList));

export default CampusListContainer;
