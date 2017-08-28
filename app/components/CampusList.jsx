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
              <NavLink to={`/campuses/${campus.id}`} key={campus.id}>
                <li className="campusListItem">
                  <div className="campusImage">
                    <img src={`${campus.imgURL}`} alt={`${campus.name} image`} height="60" width="60"></img>
                  </div>
                  <div className="campusInfo">
                    <div>{campus.name} Campus</div>
                    <div className="badge">Students Enrolled: { props.students.filter(student => student.campusId === campus.id).length }</div>
                  </div>
                </li>
              </NavLink>
            )
            })
          }
      </ul>
      <div className="enrollBox col-sm-4 col-xs-11">
        <p className="floatCenter">Welcome to the Space Academy</p>
        <p className="floatCenter">Take your education to the STARS!</p>
        <p className="floatCenter">Enroll Today</p>
        <NavLink to="/enroll"> <div className="enrollDiv"><button className="enrollButton">ENROLL</button> </div> </NavLink>
      </div>
    </div>
  );
}

const CampusListContainer = connect(mapStateToProps)(CampusesList);

export default CampusListContainer;
