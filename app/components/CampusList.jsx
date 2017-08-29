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
  return (
    <div>
      <ul className="list-unstyled campusList col-sm-6 col-xs-11">
          { props.campuses.map(campus => {
            return (
              <li className="campusListItem" key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`}>
                  <div className="campusImage">
                    <img src={`${campus.imgURL}`} alt={`${campus.name} image`} height="60" width="60" />
                  </div>
                </NavLink>
                <div className="campusInfo">
                  <div><NavLink to={`/campuses/${campus.id}`}>{campus.name} Campus</NavLink></div>
                  <div className="badge">Students Enrolled: { props.students.filter(student => student.campusId === campus.id).length }</div>
                  <div className="deleteTag"><NavLink to={`/campuses/${campus.id}/edit`}>Edit</NavLink></div>
                  <div className="deleteTag"><NavLink to={`/campuses/${campus.id}/delete`}>Delete</NavLink></div>
                </div>
              </li>
            )
            })
          }
          <NavLink to={`/campuses/new`} key={'newCampus'}>
            <li className="campusListItem newCampusBtn">
              <h2>Found a New Campus</h2>
            </li>
          </NavLink>
      </ul>
      <div className="enrollBox col-sm-4 col-xs-11">
        <p className="floatCenter"><b>Welcome to the Space Academy</b></p>
        <p className="floatCenter"><b>Take your education to the STARS!</b></p>
        <p className="floatCenter"><b>Enroll Today</b></p>
        <NavLink to="/enroll"> <div className="enrollDiv"><button className="enrollButton">ENROLL</button> </div> </NavLink>
      </div>
    </div>
  );
}

const CampusListContainer = connect(mapStateToProps)(CampusesList);

export default CampusListContainer;
