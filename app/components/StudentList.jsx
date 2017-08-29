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
  return (
    <div>
      <ul className="list-unstyled campusList col-sm-6 col-xs-11">
        <h4>Students</h4>
          { props.students.map(student => {
            return (
              <li key={student.id}>
                <div className="studentInfo">
                  <div className="studentListItem">|<NavLink to={`/students/${student.id}`}>{student.fullName}</NavLink>|</div>
                  <div className="studentListItem">|email: {student.email}|</div>
                  <div className="studentListItem">|campus: <NavLink to={`/campuses/${student.campusId}`}>{props.campuses.filter(campus => campus.id === student.campusId)[0].name}</NavLink>|</div>
                </div>
                <button value={student.id} type="delete" onClick={props.handleDelete} name="delete_button" className="deleteStudent" >x</button>
              </li>
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


