import axios from 'axios';
import store from '../store';
import {getProjectsAction} from '../actions/project-actions';

const DATA_URL = process.env.DATA_URL;

export function getProjects() {
    return axios.get(DATA_URL + '/projects.json')
        .then(response => {
            store.dispatch(getProjectsAction(response.data));
            return response;
        });
}
