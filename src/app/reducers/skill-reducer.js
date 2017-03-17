import * as types from '../actions/action-types';

const initialState = {
    skills: []
};

const skillReducer = function (state = initialState, action) {
    switch (action.type) {

        case types.GET_SKILLS:
            return Object.assign({}, state, {skills: action.skills});
    }

    return state;
};

export default skillReducer;
