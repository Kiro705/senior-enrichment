import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {destroyStudent} from '../store';

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

function StudentsList(props){
  const studentId = Number(props.match.params.studentId);
  const student = props.students.filter(student => student.id === studentId)[0];
  return (
    <div>
      <ul className="list-unstyled campusList col-sm-6 col-xs-11">
        <h4>{student.fullName}</h4>
        <li>email: {student.email}</li>
        <li>campus: <NavLink to={`/campuses/${student.campusId}`}>{props.campuses.filter(campus => campus.id === student.campusId)[0].name}</NavLink></li>
      </ul>
    </div>
  );
}

function mapDispatchToProps (dispatch, ownProps){
  return {
    handleDelete: function(evt){
      evt.preventDefault();
      dispatch(destroyStudent(evt.target.value, ownProps.history))
    }
  }
}

const StudentListContainer = connect(mapStateToProps, mapDispatchToProps)(StudentsList);

export default StudentListContainer;


