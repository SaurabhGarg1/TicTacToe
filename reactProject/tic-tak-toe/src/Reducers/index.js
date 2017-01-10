import {combineReducers} from 'redux';
import ticTakReducer from './ticTakReducer';

const allReducers = combineReducers({
    ticTakGridData : ticTakReducer
})

export default allReducers;
