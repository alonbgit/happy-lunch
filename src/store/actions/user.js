import * as actionTypes from './actionTypes';
import axios from '../../axios/getAxiosInstance';

export const signup = (payload) => (dispatch) => {

    return new Promise((resolve, reject) => {

        axios.post('/signup', payload).then((response) => {

            dispatch({
                type: actionTypes.SIGN_UP,
                payload: response.data
            });

            resolve(response.data);
    
        }).catch((ex) => {
    
            reject(ex);
    
        });

    });

}

export const signin = (payload) => (dispatch) => {

    return new Promise((resolve, reject) => {

        axios.post('/signin', payload).then((response) => {

            dispatch({
                type: actionTypes.SIGN_IN,
                payload: response.data
            });

            resolve(response.data);

        }).catch((ex) => {

            reject(ex);

        });

    });

}