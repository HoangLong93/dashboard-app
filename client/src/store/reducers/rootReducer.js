import { combineReducers } from 'redux'
import filterOptionsReducer from './filterOptionsReducer';
import userSelectedReducer from './userSelected';
import applicationDataReducer from './applicationDataReducer';

const rootReducer = combineReducers({
    filterOptions: filterOptionsReducer,
    userSelected: userSelectedReducer,
    applicationData: applicationDataReducer,
});

export default rootReducer

// the key name will be the data property on the state object