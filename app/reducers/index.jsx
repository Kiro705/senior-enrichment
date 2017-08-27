import { combineReducers } from 'redux'

// INITIAL STATE
const initialState = {
	campuses: [],
	students: []
}

// ACTION TYPES

export const GET_CAMPUSES = 'GET_CAMPUSES';

// REDUCER
const rootReducer = function(state = initialState, action) {
  switch (action.type) {
	case GET_CAMPUSES:
		return Object.assign({}, state, { campuses: action.campuses });

    default: return state
  }
};

export default rootReducer
