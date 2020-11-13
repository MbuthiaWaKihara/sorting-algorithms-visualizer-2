import {
    SET_ALGORITHM_BUBBLE,
    SET_ALGORITHM_INSERTION,
    SET_ALGORITHM_MERGE,
    SET_ALGORITHM_QUICK,
    SET_ALGORITHM_SELECTION,
    SET_ORDER_ASCENDING,
    SET_ORDER_DESCENDING,
} from './types';

export const setAlgorithmBubble = () => ({
    type: SET_ALGORITHM_BUBBLE,
});

export const setAlgorithmInsertion = () => ({
    type: SET_ALGORITHM_INSERTION,
});

export const setAlgorithmMerge = () => ({
    type: SET_ALGORITHM_MERGE,
});

export const setAlgorithmQuick = () => ({
    type: SET_ALGORITHM_QUICK,
});

export const setAlgorithmSelection = () => ({
    type: SET_ALGORITHM_SELECTION,
});

export const setOrderAscending = () => ({
    type: SET_ORDER_ASCENDING,
});

export const setOrderDescending = () => ({
    type: SET_ORDER_DESCENDING,
});