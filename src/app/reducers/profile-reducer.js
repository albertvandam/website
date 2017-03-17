import * as types from '../actions/action-types';

const initialState = {
    profile: []
};

const profileReducer = function (state = initialState, action) {
    switch (action.type) {

        case types.GET_PROFILE:
            return Object.assign({}, state, {profile: action.profile});
    }

    return state;
};

export default profileReducer;
