import * as types from './action-types';

export function getProjectsAction(projects) {
    return {
        type: types.GET_PROJECTS,
        projects
    };
}
