import * as types from '../actions/action-types';
import * as ContactStatus from '../constants/contact-status';

const initialState = {
    name   : {
        value  : '',
        enabled: true,
        empty  : true
    },
    email  : {
        value  : '',
        enabled: true,
        empty  : true
    },
    message: {
        value  : '',
        enabled: true,
        empty  : true
    },
    captcha: {
        widget: null,
        value : ''
    },
    valid  : false,
    status : ContactStatus.WAITING_FOR_RECAPTCHA
};

const contactReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.SET_CONTACT_DATA:
            return Object.assign({}, state, action.state);

        case types.RESET_CONTACT_DATA:
            return Object.assign({}, state, {
                name   : {
                    value  : '',
                    enabled: true,
                    empty  : true
                },
                email  : {
                    value  : '',
                    enabled: true,
                    empty  : true
                },
                message: {
                    value  : '',
                    enabled: true,
                    empty  : true
                },
                valid  : false,
                status : ContactStatus.MUST_INITIALISE
            });
    }

    return state;
};

export default contactReducer;
