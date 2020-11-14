import {
    SET_MILLISECONDS,
    SET_FRAMES,
    SET_STATUS,
} from './types';

const initialState = {
    frames: [],
    status: 'domant',
    milliseconds: Math.floor(Math.random() * (401 - 10) + 10),
    framesSize: 0,
}

const animationReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_FRAMES:
            return {
                ...state,
                frames: action.payload,
                framesSize: action.payload.length,
            }
        case SET_MILLISECONDS:
            return {
                ...state,
                milliseconds: action.payload,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.payload,
            }
        default:
            return state;
    }
}

export default animationReducer;