import { createStore, applyMiddleware } from 'redux';
import rootReducer, { GET_CAMPUSES, GET_STUDENTS, WRITE_FIRSTNAME, WRITE_LASTNAME, MAKE_STUDENT, WRITE_CAMPUS_CHOICE, DELETE_STUDENT, EDIT_STUDENT, WRITE_CAMPUS_NAME, WRITE_CAMPUS_URL, MAKE_CAMPUS, DELETE_CAMPUS, EDIT_CAMPUS, GET_CAMPUSE_SELECTOR } from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios';

// ACTION CREATORS

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function getCampusSelector () {
  const action = { type: GET_CAMPUSE_SELECTOR};
  return action;
}

export function writeFirstName (firstName) {
  const action = { type: WRITE_FIRSTNAME, firstName };
  return action;
}

export function writeLastName (lastName) {
  const action = { type: WRITE_LASTNAME, lastName };
  return action;
}

export function writeCampusChoice (campus) {
  const action = { type: WRITE_CAMPUS_CHOICE, campus};
  return action;
}

export function writeCampusName (name) {
  const action = { type: WRITE_CAMPUS_NAME, name};
  return action;
}

export function writeCampusURL (name) {
  const action = { type: WRITE_CAMPUS_URL, name};
  return action;
}

function makeCampus (campus) {
  const action = {type: MAKE_CAMPUS, campus};
  return action;
}

function makeStudent (student) {
  const action = {type: MAKE_STUDENT, student};
  return action;
}

function deleteStudent (studentId) {
  const action = {type: DELETE_STUDENT, studentId};
  return action;
}

function deleteCampus (campusId) {
  const action = {type: DELETE_CAMPUS, campusId};
  return action;
}

function editStudentAction (student) {
  const action = {type: EDIT_STUDENT, student};
  return action;
}

function editCampusAction (campus) {
  const action = {type: EDIT_CAMPUS, campus};
  return action;
}

// THUNK CREATORS

export function fetchCampuses () {

  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  }
}

export function fetchStudents () {

  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  }
}

export function postStudent (student, history) {

  return function thunk (dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        const action = makeStudent(newStudent);
        dispatch(action);
        history.push('/campuses');
      });
  }
}

export function postCampus (campus, history) {

  return function thunk (dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        const action = makeCampus(newCampus);
        dispatch(action);
        history.push('/campuses');
      });
  }
}

export function destroyStudent (studentId) {

  return function thunk (dispatch) {
    return axios.delete(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(targetStudent => {
        const action = deleteStudent(studentId);
        dispatch(action);
      });
  }
}

export function destroyCampus (campusId, history) {

  return function thunk (dispatch) {
    return axios.delete(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(targetCampus => {
        const action = deleteCampus(campusId);
        dispatch(action);
        history.push('/campuses');
      });
  }
}

export function editStudent (student, history) {
  return function thunk (dispatch) {
    return axios.put(`/api/students/${student.id}`, student)
      .then(res => res.data)
      .then(targetStudent => {
        const action = editStudentAction(targetStudent);
        dispatch(action);
        history.push(`/students/${targetStudent.id}`);
      });
  }
}   

export function editCampus (campus, history) {
  return function thunk (dispatch) {
    return axios.put(`/api/campuses/${campus.id}`, campus)
      .then(res => res.data)
      .then(targetCampus => {
        const action = editCampusAction(targetCampus);
        dispatch(action);
        history.push(`/campuses/${targetCampus.id}`);
      });
  }
}  
console.log("QQQQQQQQQ", process.env.NODE_ENV)
export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))
