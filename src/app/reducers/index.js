import {combineReducers} from 'redux';
import mainMenuReducer from './main-menu-reducer';
import skillReducer from './skill-reducer';
import contactReducer from './contact-reducer';
import projectReducer from './project-reducer';
import profileReducer from './profile-reducer';
import bioReducer from './bio-reducer';

// Combine Reducers
const reducers = combineReducers({
    mainMenuState: mainMenuReducer,
    skillState   : skillReducer,
    profileState : profileReducer,
    contactState : contactReducer,
    projectState : projectReducer,
    bioState     : bioReducer
});

export default reducers;
