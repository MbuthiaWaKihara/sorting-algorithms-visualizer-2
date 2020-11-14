import {
   SET_ALGORITHM,
   SET_ORDER,
} from './types';

export const setAlgorithm = algorithm => ({
    type: SET_ALGORITHM,
    payload: algorithm,
});

export const setOrder = order => ({
    type: SET_ORDER,
    payload: order,
});



