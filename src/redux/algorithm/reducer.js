//types
import {
    SET_ALGORITHM,
    SET_ORDER,
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
        case SET_ALGORITHM:
            return ({
                ...state,
                algorithm: action.payload,
            });
        case SET_ORDER:
            return ({
                ...state,
                order: action.payload,
            });
        default:
            return state;
    }
}

export default algorithmsReducer;