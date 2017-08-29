import React from 'react';
import {connect} from 'react-redux';
import {writeFirstName, writeLastName, writeCampusChoice, editStudent} from '../store.jsx';

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses,
    students: state.students,
    newFirstName: state.newFirstName,
    newLastName: state.newLastName,
    campusChoice: state.campusChoice
  }
}

function EditReturn(props){
	const studentId = Number(props.match.params.studentId);
	const student = props.students.filter(oneStudent => oneStudent.id === studentId)[0];
  return (
    <div className=" campusList col-sm-6 col-11">
      <h2 className="floatCenter">Editing Data for: {student.fullName}</h2>
      <form id="enroll-form" onSubmit={props.handleSubmit}>
        <div className="inputGroup">
          <span>
            <h5>First Name</h5>
          </span>
          <input
            className="inputField"
            type="text"
            name="firstName"
            value={props.newChannelEntry}
            onChange={props.handleFirstName}
          />
        </div>
        <div className="inputGroup">
          <span>
            <h5>Last Name</h5>
          </span>
          <input
            className="inputField"
            type="text"
            name="lastName"
            onChange={props.handleLastName}
          />
        </div>
        <div className="inputGroup">
          <span>
            <h5>Campus</h5>
          </span>
          <select name="campus" onChange={props.handelCampus}>
            {
              props.campuses.map(campus => {
                return (
                  <option value={Number(campus.id)} key={campus.id} >The {campus.name} Campus</option>
                  )
              })
            }
          </select>
        </div>
        <button type="submit" id="submit">Click to Enroll</button>
      </form>
    </div>
  );
}

function mapDispatchToProps (dispatch, ownProps){
  return {
    handleFirstName: function(evt){
      dispatch(writeFirstName(evt.target.value))
    },
    handleLastName: function(evt){
      dispatch(writeLastName(evt.target.value))
    },
    handelCampus: function(evt){
      dispatch(writeCampusChoice(evt.target.value))
    },
    handleSubmit: function(evt){
      evt.preventDefault();
      dispatch(editStudent({id: Number(ownProps.match.params.studentId), firstName: evt.target.firstName.value, lastName: evt.target.lastName.value, campusId: Number(evt.target.campus.value)}, ownProps.history))
      dispatch(writeFirstName(''));
      dispatch(writeLastName(''));
      dispatch(writeCampusChoice(1));
    }
  }
}


const EditContainer = connect(mapStateToProps, mapDispatchToProps)(EditReturn);

export default EditContainer;


