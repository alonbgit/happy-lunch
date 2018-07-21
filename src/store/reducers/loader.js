import * as actionTypes from '../actions/actionTypes';

const initialState = {
    showLoader: false
}

const showLoader = (state) => {
    return {
        ...state,
        showLoader: true
    };
}

const hideLoader = (state) => {
    return {
        ...state,
        showLoader: false
    };
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.SHOW_LOADER:
            return showLoader(state, action);

        case actionTypes.HIDE_LOADER:
            return hideLoader(state, action);

        default:
            return state;

    }

}

export default reducer;