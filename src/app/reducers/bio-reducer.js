import * as types from '../actions/action-types';

const initialState = {
    bio: {
        title      : '',
        content    : [],
        catchPhrase: '',
        tagLine    : ''
    }
};

const bioReducer = function (state = initialState, action) {
    switch (action.type) {

        case types.GET_BIO:
            return Object.assign({}, state, {bio: action.bio});
    }

    return state;
};

export default bioReducer;
