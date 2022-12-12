import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';


// log in the user


export const signin = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });
        router.push('/');
    } catch (error) {
        console.log(error);

    }
};

// sign up the user

export const signup = (formData, router) => async (dispatch) => {

    try {

        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        router.push('/');
    } catch (error) {
        console.log(error);

    }
};

