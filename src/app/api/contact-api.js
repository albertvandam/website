import axios from 'axios';
import store from '../store';
import * as ContactStatus from '../constants/contact-status';
import * as ContactActions from '../actions/contact-actions';

export function sendMessage(message) {
    let content = {
        name   : message.name.value,
        email  : message.email.value,
        message: message.message.value,
        captcha: message.captcha.value
    };

    return axios.post(process.env.CF_EP, content)
        .then(response => {
            store.dispatch(ContactActions.setContactData({
                status: response.data.ok ? ContactStatus.SENT : ContactStatus.FAILED
            }));

            return response;
        });
}
