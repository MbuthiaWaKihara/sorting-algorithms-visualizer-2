//types
import {
    SET_ALGORITHM_BUBBLE,
    SET_ALGORITHM_INSERTION,
    SET_ALGORITHM_MERGE,
    SET_ALGORITHM_QUICK,
    SET_ALGORITHM_SELECTION,
    SET_ORDER_ASCENDING,
    SET_ORDER_DESCENDING,
} from './types';

//utils
import { randomizeAlgsInfo } from '../../logic/algorithmsLogic';

const { algorithm , order} = randomizeAlgsInfo();

const initialState = {
    algorithm,
    order,
}

const algorithmsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ALGORITHM_BUBBLE:
            return ({
                ...state,
                algorithm: 'bubble',
            });
        case SET_ALGORITHM_MERGE:
            return ({
                ...state,
                algorithm: 'merge',
            });
        case SET_ALGORITHM_QUICK:
            return ({
                ...state,
                algorithm: 'quick',
            });
        case SET_ALGORITHM_INSERTION:
            return ({
                ...state,
                algorithm: 'insertion',
            });
        case SET_ALGORITHM_SELECTION:
            return ({
                ...state,
                algorithm: 'selection',
            });
        case SET_ORDER_ASCENDING:
            return ({
                ...state,
                order: 'ascending',
            });
        case SET_ORDER_DESCENDING:
            return ({
                ...state,
                order: 'descending',
            });
        default:
            return initialState;
    }
}

export default algorithmsReducer;