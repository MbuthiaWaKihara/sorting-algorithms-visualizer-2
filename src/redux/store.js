import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//root reducer
import rootReducer from './rootReducer';

const middleware = [];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;