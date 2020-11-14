import {
    GENERATE_NEW_ARRAY,
    CHANGE_CURRENT_ARRAY,
} from './types';

import {
    createNewArray
} from '../../logic/arrayLogic';

export const generateNewArray = (size) => {
    const array = createNewArray(size);
    return ({
        type: GENERATE_NEW_ARRAY,
        payload: array,
    });
}

export const changeCurrentArray = array => ({
    type: CHANGE_CURRENT_ARRAY,
    payload: array,
});