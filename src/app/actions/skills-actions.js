import * as types from './action-types';

export function getSkillsAction(skills) {
    return {
        type: types.GET_SKILLS,
        skills
    };
}
