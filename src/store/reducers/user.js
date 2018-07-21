import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false
}

const signup = (state, {payload}) => {
    return {
        ...state,
        isLoggedIn: payload.success
    }
}

const signin = (state, {payload}) => {
    return {
        ...state,
        isLoggedIn: payload.success
    }
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.SIGN_UP:
            return signup(state, action);

        case actionTypes.SIGN_IN:
            return signin(state, action);

        default:
            return state;

    }

}

export default reducer;