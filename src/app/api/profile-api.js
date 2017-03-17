import axios from 'axios';
import store from '../store';
import {getProfileAction} from '../actions/profile-actions';

const DATA_URL = process.env.DATA_URL;

export function getProfile() {
    return axios.get(DATA_URL + '/profile.json')
        .then(response => {
            store.dispatch(getProfileAction(response.data));
            return response;
        });
}
