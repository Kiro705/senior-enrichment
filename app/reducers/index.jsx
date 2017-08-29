import { combineReducers } from 'redux'

// INITIAL STATE
const initialState = {
	campuses: [],
	students: [],
	newFirstName: '',
	newLastName: '',
	campusChoice: 0,
	newCampusName: '',
	newCampusURL: ''

}

// ACTION TYPES

export const GET_CAMPUSES = 'GET_CAMPUSES';
export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_CAMPUSE_SELECTOR = 'GET_CAMPUSE_SELECTOR';
export const WRITE_FIRSTNAME = 'WRITE_FIRSTNAME';
export const WRITE_LASTNAME = 'WRITE_LASTNAME';
export const WRITE_CAMPUS_CHOICE = 'WRITE_CAMPUS_CHOICE';
export const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';
export const WRITE_CAMPUS_URL = 'WRITE_CAMPUS_URL';
export const MAKE_CAMPUS = 'MAKE_CAMPUS';
export const MAKE_STUDENT = 'MAKE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const DELETE_CAMPUS = 'DELETE_CAMPUS';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const EDIT_CAMPUS = 'EDIT_CAMPUS';

// REDUCER
const rootReducer = function(state = initialState, action) {
  switch (action.type) {
	case GET_CAMPUSES:
		return Object.assign({}, state, { campuses: action.campuses });

	case GET_STUDENTS:
		return Object.assign({}, state, { students: action.students });

	case GET_CAMPUSE_SELECTOR:
		if (state.campuses[0]){
			return Object.assign({}, state, { campusChoice: state.campuses[0].id });
		} else {
			return Object.assign({}, state, { campusChoice: 0});
		}

	case WRITE_FIRSTNAME:
		return Object.assign({}, state, { newFirstName: action.firstName });

	case WRITE_LASTNAME:
		return Object.assign({}, state, { newLastName: action.lastName });

	case WRITE_CAMPUS_CHOICE:
		return Object.assign({}, state, { campusChoice: action.campus });

	case WRITE_CAMPUS_NAME:
		return Object.assign({}, state, { newCampusName: action.name });

	case WRITE_CAMPUS_URL:
		return Object.assign({}, state, { newCampusURL: action.url });

	case MAKE_CAMPUS:
		return Object.assign({}, state, { campuses: state.campuses.concat(action.campus) });

	case MAKE_STUDENT:
		return Object.assign({}, state, { students: state.students.concat(action.student) });

	case DELETE_STUDENT:
		return Object.assign({}, state, { students: state.students.filter(student => Number(student.id) !== Number(action.studentId))});

	case DELETE_CAMPUS:
		return Object.assign({}, state, { campuses: state.campuses.filter(campus => Number(campus.id) !== Number(action.campusId))});

	case EDIT_STUDENT:
		return Object.assign({}, state, { students: state.students.filter(student => Number(student.id) !== Number(action.student.id)).concat(action.student)});

	case EDIT_CAMPUS:
		return Object.assign({}, state, { campuses: state.campuses.filter(campus => Number(campus.id) !== Number(action.campus.id)).concat(action.campus)});

    default: return state
  }
};

export default rootReducer
