'use strict';

import axios from 'axios';
import store from '../store';
import * as ContactStatus from '../constants/contact-status';
import * as ContactActions from '../actions/contact-actions';
import siteConfig from '../../config/global';

export function sendMessage(message) {
    let content = {
        name   : message.name.value,
        email  : message.email.value,
        message: message.message.value,
        captcha: message.captcha.value
    };

    return axios.post(siteConfig.mailer, content)
        .then(response => {
            store.dispatch(ContactActions.setContactData({
                status: response.data.ok ? ContactStatus.SENT : ContactStatus.FAILED
            }));
        })
        .catch(error => {
            console.error(error);

            store.dispatch(ContactActions.setContactData({
                status: ContactStatus.FAILED
            }));
        });
}
