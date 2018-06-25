import { combineReducers } from 'redux';

import counterReducer from './counter';
import resultReducer from './results';

export const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});
