import * as actionTypes from '../actions/actionTypes';

const initialState = {
    groups: [
        {
            id: 1,
            name: 'Burgus',
            createdDate: 1532776473714,
            users: [
                {
                    name: 'Ran',
                    id: 1,
                },
                {
                    name: 'Alon',
                    id: 2,
                },
                {
                    name: 'Adam',
                    id: 3,
                },
                {
                    name: 'Ran',
                    id: 4,
                },
                {
                    name: 'Alon',
                    id: 5,
                },
                {
                    name: 'Adam',
                    id: 6,
                },
                {
                    name: 'Ran',
                    id: 7,
                },
                {
                    name: 'Alon',
                    id: 8,
                },
                {
                    name: 'Adam',
                    id: 9,
                },
                {
                    name: 'Ran',
                    id: 10,
                },
                {
                    name: 'Alon',
                    id: 11,
                },
                {
                    name: 'Adam',
                    id: 12,
                }
            ]
        },
        {
            id: 2,
            name: 'Moses',
            createdDate: 1532776473714,
            users: [
                {
                    name: 'Ran',
                    id: 1,
                },
                {
                    name: 'Alon',
                    id: 2,
                },
                {
                    name: 'Adam',
                    id: 3,
                },
            ]
        },
        {
            id: 3,
            name: 'Bagdad',
            createdDate: 1532776473714,
            users: [
                {
                    name: 'Ran',
                    id: 1,
                },
                {
                    name: 'Alon',
                    id: 2,
                },
                {
                    name: 'Adam',
                    id: 3,
                },
            ]
        },
        {
            id: 4,
            name: 'Jiraffe',
            createdDate: 1532776473714,
            users: [
                {
                    name: 'Ran',
                    id: 1,
                },
                {
                    name: 'Alon',
                    id: 2,
                },
                {
                    name: 'Adam',
                    id: 3,
                },
            ]
        }
    ]
}

const joinGroup = (state, action) => {
    return {
        ...state
    }
}

const exitGroup = (state, action) => {
    return {
        ...state
    }
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.JOIN_GROUP:
            return joinGroup(state, action);

        case actionTypes.EXIT_GROUP:
            return exitGroup(state, action);

        default:
            return state;

    }

}

export default reducer;