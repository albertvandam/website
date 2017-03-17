import * as types from '../actions/action-types';

const initialState = {
    projects: []
};

const projectReducer = function (state = initialState, action) {
    switch (action.type) {

        case types.GET_PROJECTS:
            return Object.assign({}, state, {projects: action.projects});
    }

    return state;
};

export default projectReducer;
