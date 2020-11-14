import {
    SET_MILLISECONDS,
    SET_FRAMES,
    SET_STATUS,
} from './types';

export const setMilliseconds = milliseconds => ({
    type: SET_MILLISECONDS,
    payload: milliseconds,
});

export const setFrames = frames => ({
    type: SET_FRAMES,
    payload: frames,
});

export const setStatus = status => ({
    type: SET_STATUS,
    payload: status,
})