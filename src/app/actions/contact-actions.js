import * as types from './action-types';

export function setContactData(state) {
    return {
        type: types.SET_CONTACT_DATA,
        state
    };
}

export function resetContactData() {
    const state = {};

    return {
        type: types.RESET_CONTACT_DATA,
        state
    };
}
