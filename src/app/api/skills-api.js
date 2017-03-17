import axios from 'axios';
import store from '../store';
import {getSkillsAction} from '../actions/skills-actions';

const DATA_URL = process.env.DATA_URL;

export function getSkills() {
    return axios.get(DATA_URL + '/skills.json')
        .then(response => {
            store.dispatch(getSkillsAction(response.data));
            return response;
        });
}
