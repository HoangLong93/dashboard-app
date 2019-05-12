import {
    GET_APPLICATION_DATA_FIELDS,
} from '../actions/types';

export default (state = {data: []}, action) => {
    switch (action.type) {
        case GET_APPLICATION_DATA_FIELDS:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};
