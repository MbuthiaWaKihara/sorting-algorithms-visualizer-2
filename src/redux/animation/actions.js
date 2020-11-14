import {
    SET_MILLISECONDS,
} from './types';

export const setMilliseconds = milliseconds => ({
    type: SET_MILLISECONDS,
    payload: milliseconds,
})