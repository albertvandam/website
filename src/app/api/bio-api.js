import axios from 'axios';
import store from '../store';
import {getBioAction} from '../actions/bio-actions';

const DATA_URL = process.env.DATA_URL;

export function getBio() {
    return axios.get(DATA_URL + '/bio.json')
        .then(response => {
            store.dispatch(getBioAction(response.data));
            return response;
        });
}
