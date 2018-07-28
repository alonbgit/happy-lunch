import * as actionTypes from './actionTypes';
import axios from '../../axios/getAxiosInstance';

export const joinGroup = (payload) => (dispatch) => {
    
    axios.post(payload, '/groups/join').then((response) => {

        dispatch({
            type: actionTypes.JOIN_GROUP,
            payload
        });

    });

}

export const exitGroup = (payload) => dispatch => {

    axios.post(payload, '/groups/exit').then((response) => {

        dispatch({
            type: actionTypes.EXIT_GROUP,
            payload
        });

    });

}