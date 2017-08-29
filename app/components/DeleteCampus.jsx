import React from 'react';
import { NavLink } from 'react-router-dom';
import {destroyCampus, fetchCampuses, fetchStudents, getCampusSelector} from '../store';
import {connect} from 'react-redux';

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

function DeleteCampusFunc(props){
  const campusId = Number(props.match.params.campusId);
  let theCampus = props.campuses.filter((campus) => campus.id === campusId);
  const studentArray = props.students.filter(student => student.campusId === campusId);
  let studentPlural;
  if (studentArray.length > 1){
    studentPlural = 's '
  } else {
    studentPlural = ' ';
  }
  if (theCampus[0]){
    theCampus = theCampus[0];
    return (
      <div>
        <div className=" campusList col-sm-6 col-xs-11">
          <h1>Are you sure you want to destroy the {theCampus.name} Campus?</h1>
          {(studentArray.length > 0) ? <h4>All {studentArray.length} student{studentPlural} will become homeless.</h4> : <div /> }
          <button className="yesBtn" onClick={props.handleDelete} value={campusId} type="submit" id="yes">Yes</button>
          <NavLink to="/campuses"><button className="noBtn" type="submit" id="no">No</button></NavLink>
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
      dispatch(destroyCampus(evt.target.value, ownProps.history));
      dispatch(fetchCampuses());
      dispatch(fetchStudents());
      dispatch(getCampusSelector());
    }
  }
}

const DeleteCampusContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteCampusFunc);

export default DeleteCampusContainer;
