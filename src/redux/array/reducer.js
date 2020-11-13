import {
    GENERATE_NEW_ARRAY,
} from './types';
import { createNewArray } from '../../logic/arrayLogic';

const arraySize = Math.floor(Math.random() * (120 - 5) + 5);
const initialState = {
    array: createNewArray(arraySize),
    size: arraySize,
}

const arrayReducer = (state = initialState, action) => {
    switch(action.type) {
        case GENERATE_NEW_ARRAY:
            return {
                ...state,
                array: action.payload,
            }
        default: 
            return initialState;
    }
}

export default arrayReducer;