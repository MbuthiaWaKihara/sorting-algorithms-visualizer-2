import {
    SET_MILLISECONDS,
} from './types';

const initialState = {
    frames: [],
    status: 'domant',
    milliseconds: Math.floor(Math.random() * (401 - 10) + 10),
    framesSize: 0,
}

const animationReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_MILLISECONDS:
            return {
                ...state,
                milliseconds: action.payload,
            }
        default:
            return initialState;
    }
}

export default animationReducer;