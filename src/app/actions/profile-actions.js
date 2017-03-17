import * as types from './action-types';

export function getProfileAction(profile) {
    return {
        type: types.GET_PROFILE,
        profile
    };
}
