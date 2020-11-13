import { combineReducers } from 'redux';

import arrayReducer from './array/reducer';
import algorithmsReducer from './algorithm/reducer';

const rootReducer = combineReducers({
    arrayData: arrayReducer,
    algorithms: algorithmsReducer,
})

export default rootReducer;