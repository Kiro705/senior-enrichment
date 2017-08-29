import { combineReducers } from 'redux'

// INITIAL STATE
const initialState = {
	campuses: [],
	students: [],
	newFirstName: '',
	newLastName: '',
	campusChoice: 1
}

// ACTION TYPES

export const GET_CAMPUSES = 'GET_CAMPUSES';
export const GET_STUDENTS = 'GET_STUDENTS';
export const WRITE_FIRSTNAME = 'WRITE_FIRSTNAME';
export const WRITE_LASTNAME = 'WRITE_LASTNAME';
export const WRITE_CAMPUS_CHOICE = 'WRITE_CAMPUS_CHOICE';
export const MAKE_STUDENT = 'MAKE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT'

// REDUCER
const rootReducer = function(state = initialState, action) {
  switch (action.type) {
	case GET_CAMPUSES:
		return Object.assign({}, state, { campuses: action.campuses });

	case GET_STUDENTS:
		return Object.assign({}, state, { students: action.students });

	case WRITE_FIRSTNAME:
		return Object.assign({}, state, { newFirstName: action.firstName });

	case WRITE_LASTNAME:
		return Object.assign({}, state, { newLastName: action.lastName });

	case WRITE_CAMPUS_CHOICE:
		return Object.assign({}, state, { campusChoice: action.campus });

	case MAKE_STUDENT:
		return Object.assign({}, state, { students: state.students.concat(action.student) });

	case DELETE_STUDENT:
		return Object.assign({}, state, { students: state.students.filter(student => Number(student.id) !== Number(action.studentId))});

	case EDIT_STUDENT:
		console.log('reducer hit');
		return Object.assign({}, state, { students: state.students.filter(student => Number(student.id) !== Number(action.student.id)).concat(action.student)});

    default: return state
  }
};

export default rootReducer
