import {
    GENERATE_NEW_ARRAY,
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