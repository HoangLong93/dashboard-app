import {
    FETCH_DATA_SOURCE,
    SET_BUILDNAME_FILTER,
    SET_BUILDVER_FILTER,
} from '../actions/types';

const initialState = { 
    selectedDataSourceDetails: [],
    selectedBuildName: "",
    selectedBuildVer: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_SOURCE:
            return { ...state, selectedDataSourceDetails: action.payload };
        case SET_BUILDNAME_FILTER:
            return { ...state, selectedBuildName: action.payload };
        case SET_BUILDVER_FILTER:
            return { ...state, selectedBuildVer: action.payload };
        default:
            return state;
    }
};
