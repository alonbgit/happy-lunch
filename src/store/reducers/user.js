import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false
}

const signup = (state, {payload}) => {
    if (payload.success) {
        state.isLoggedIn = true;
    }
    return state;
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.SIGN_UP:
            return signup(state, action);

        default:
            return state;

    }

}

export default reducer;