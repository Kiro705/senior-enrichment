import { combineReducers } from 'redux'

// INITIAL STATE
const initialState = {
	campuses: [],
	students: []
}

// ACTION TYPES

export const GET_CAMPUSES = 'GET_CAMPUSES';
export const GET_STUDENTS = 'GET_STUDENTS';

// REDUCER
const rootReducer = function(state = initialState, action) {
  switch (action.type) {
	case GET_CAMPUSES:
		return Object.assign({}, state, { campuses: action.campuses });

	case GET_STUDENTS:
		return Object.assign({}, state, { students: action.students });

    default: return state
  }
};

export default rootReducer
