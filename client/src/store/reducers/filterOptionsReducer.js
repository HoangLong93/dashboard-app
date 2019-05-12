import _ from 'lodash';
import {
    FETCH_ID_LIST,
    GET_BUILDNAME_LIST,
    GET_BUILDVER_LIST,
} from '../actions/types';

const initialState = { 
    idList: {},
    buildNameList: {},
    buildVerList: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ID_LIST:
          return { ...state, idList: _.mapKeys(action.payload, 'appID') };
        case GET_BUILDNAME_LIST:
            return { ...state, buildNameList: _.mapKeys(action.payload, 'buildName') };
        case GET_BUILDVER_LIST:
            return { ...state, buildVerList: _.mapKeys(action.payload, 'buildVer') };
        default:
            return state;
    }
};
