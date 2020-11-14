import { combineReducers } from 'redux';

import arrayReducer from './array/reducer';
import algorithmsReducer from './algorithm/reducer';
import animationReducer from './animation/reducer';

const rootReducer = combineReducers({
    arrayData: arrayReducer,
    algorithms: algorithmsReducer,
    animation: animationReducer,
});

export default rootReducer;