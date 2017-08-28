import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {destroyStudent} from '../store';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

function SingleCampusesList(props){
  const campusId = Number(props.match.params.campusId);
  let theCampus = props.campuses.filter((campus) => campus.id === campusId);
  if (props.campuses[0]){
    theCampus = theCampus[0];
    return (
      <div>
        <div className=" campusList col-sm-6 col-xs-11">
          <h3>The {theCampus.name} Campus</h3>
          <p>Enrolled Students:</p>
          <ul className="list-unstyled">
            {
              props.students.map(student => {
                if (student.campusId === campusId){
                  return (<li key={student.id} className="studentInList">
                    <div className="StudentInfo">
                      <p>Name: {student.fullName}</p>
                      <p>Email: {student.email}</p>
                    </div>
                    <button value={student.id} type="delete" onClick={props.handleDelete} name="delete_button" className="deleteStudent" >x</button>
                  </li>)
                }
              })
            }
          </ul>
        </div>
        <div className=" enrollBox col-sm-4 col-xs-11">
          <img className="fullImage" src={`${theCampus.imgURL}`} alt={`${theCampus.name} image`} ></img>
        </div>
      </div>
    );
  } else {
    return (<div>hi</div>)
  }
}

function mapDispatchToProps (dispatch, ownProps){
  return {
    handleDelete: function(evt){
      evt.preventDefault();
      console.log(evt.target.value)
      dispatch(destroyStudent(evt.target.value, ownProps.history))
    }
  }
}

const CampusListContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCampusesList));

export default CampusListContainer;
