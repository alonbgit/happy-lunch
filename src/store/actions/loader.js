import * as actionTypes from './actionTypes';

export const showLoader = () => {
    return {
        type: actionTypes.SHOW_LOADER
    };
}

export const hideLoader = () => {
    return {
        type: actionTypes.HIDE_LOADER
    };
}