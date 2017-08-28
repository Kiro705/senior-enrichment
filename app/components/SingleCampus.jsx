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

function SingleCampusesList(props){
  console.log(props)
  const campusId = Number(props.match.params.campusId);
  let theCampus = props.campuses.filter((campus) => campus.id === campusId);
  if(props.campuses[0]){
    theCampus = theCampus[0];
    console.log(theCampus)
    return (
      <div>
        <div className=" campusList col-sm-6">
          <h3>The {theCampus.name} Campus</h3>
          <p>Enrolled Students:</p>
          <ul className="list-unstyled ">
            {
              props.students.map(student => {
                if (student.campusId === campusId){
                  return (<li key={student.id} ><p>Name: {student.fullName}</p><p>Email: {student.email}</p></li>)
                }
              })
            }
          </ul>
        </div>
        <div className="enrollBox col-sm-4">
          <img src={`${theCampus.imgURL}`} alt={`${theCampus.name} image`} height="100%" width="100%"></img>
        </div>
      </div>
    );
  } else {
    return (<div></div>)
  }
}

const CampusListContainer = connect(mapStateToProps)(SingleCampusesList);

export default CampusListContainer;
