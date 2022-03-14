import { combineReducers } from 'redux';
import animalsReducer from './AnimalsReducer'

export default combineReducers({
    animals: animalsReducer,
});