import * as types from './action-types';

export function getBioAction(bio) {
    return {
        type: types.GET_BIO,
        bio
    };
}
