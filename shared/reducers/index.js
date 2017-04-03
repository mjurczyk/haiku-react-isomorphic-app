import { combineReducers } from 'redux';

import haikus from './haiku-reducer';
import runtime from './runtime-reducer';

export default combineReducers({
    haikus,
    runtime
});