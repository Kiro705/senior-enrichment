import React from 'react';
import { NavLink } from 'react-router-dom';
import {destroyStudent} from '../store';
import {connect} from 'react-redux';

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
          <div className="deleteTag"><NavLink to={`/campuses/${theCampus.id}/edit`}>Edit</NavLink></div>
          <div className="deleteTag"><NavLink to={`/campuses/${theCampus.id}/delete`}>Delete</NavLink></div>
          <p>Enrolled Students:</p>
          <ul className="list-unstyled">
            {
              props.students.map(student => {
                if (student.campusId === campusId){
                  return (<li key={student.id} className="studentInList">
                    <div className="StudentInfoC">
                      <p>Name: <NavLink to={`/students/${student.id}`}>{student.fullName}</NavLink></p>
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
    return (
      <div>
        <ul className="list-unstyled campusList col-sm-6 col-xs-11">
          <h4>No campus with id: {campusId}</h4>
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch, ownProps){
  return {
    handleDelete: function(evt){
      evt.preventDefault();
      dispatch(destroyStudent(evt.target.value, ownProps.history))
    }
  }
}

const CampusListContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampusesList);

export default CampusListContainer;
