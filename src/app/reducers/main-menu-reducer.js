import * as types from '../actions/action-types';

const initialState = {
    visible: false
};

const mainMenuReducer = function (state = initialState, action) {
    switch (action.type) {

        case types.MENU_SHOW:
            return Object.assign({}, state, {visible: true, children: action.children});

        case types.MENU_HIDE:
            return Object.assign({}, state, {visible: false, children: action.children});
    }

    return state;
};

export default mainMenuReducer;
