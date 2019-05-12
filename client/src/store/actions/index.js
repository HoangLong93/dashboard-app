import datasource from '../../apis';
import {
    FETCH_ID_LIST,
    FETCH_DATA_SOURCE,
    GET_APPLICATION_DATA_FIELDS,
    GET_BUILDNAME_LIST,
    SET_BUILDNAME_FILTER,
    GET_BUILDVER_LIST,
    SET_BUILDVER_FILTER,
} from './types';

// fetch all appids
export const fetchIdList = () => async dispatch => {
    const response = await datasource.get('/app');

    dispatch({ type: FETCH_ID_LIST, payload: response.data });
};

// fetch data by appid
export const fetchDataSource = id => async dispatch => {
    const response = await datasource.get(`/app/${id}`);

    dispatch({ type: FETCH_DATA_SOURCE, payload: response.data });
};

// get set of fields from all records in the db
export const getApplicationFields = () => async dispatch => {
    const response = await datasource({
        method: 'post',
        url: '/appData',
        data: { "fields": ['meanSendingRateKbps', 'buildName', 'buildVer'] }
    });

    dispatch({ type: GET_APPLICATION_DATA_FIELDS, payload: response.data });
};

// get buildName list
export const getBuildNameList = () => async dispatch => {
    const response = await datasource.get(`/buildName/`);

    dispatch({ type: GET_BUILDNAME_LIST, payload: response.data });
};

// filter result by buildName
export const setFilterBuildName = (buildName) => async dispatch => {
    dispatch({ type: SET_BUILDNAME_FILTER, payload: buildName });
};

// get buildVer list
export const getBuildVerList = () => async dispatch => {
    const response = await datasource.get(`/buildVer/`);

    dispatch({ type: GET_BUILDVER_LIST, payload: response.data });
};

// filter result by buildVer
export const setFilterBuildVer = (buildVer) => async dispatch => {
    dispatch({ type: SET_BUILDVER_FILTER, payload: buildVer });
};