import {combineReducers} from 'redux';
import mainMenuReducer from './main-menu-reducer';
import contactReducer from './contact-reducer';

// Combine Reducers
const reducers = combineReducers({
    mainMenuState: mainMenuReducer,
    contactState : contactReducer,
});

export default reducers;
