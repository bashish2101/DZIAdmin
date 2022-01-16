import axios from 'axios';
import { DefaultPasswordActions } from './defaultPasswordAction';
import { showSuccessSnackbar } from '../../snackBar/snackBar.action';

const getAdminURL = (state) => {
    return state.environnment.environmentLists.adminBaseURL;
}

export const setDefaultPasswordAsync = (setDefaultPassword) => {
    return async (dispatch, getState) => {
        try {
            const adminBaseURL = getAdminURL(getState());
            let { _id } = getState().auth.user;
            dispatch(DefaultPasswordActions.setDefaultPasswordStart());
            const { data } = await axios({
                method: "POST",
                url: `${process.env.REACT_APP_HOST}${adminBaseURL}/setDefaultPassword/${_id}`,
                headers: {
                    'Content-Type': "application/json"
                },
                data: setDefaultPassword
            });
            if (data.responseCode === 200) {
                dispatch(DefaultPasswordActions.setDefaultPasswordSuccess(data.responseData));
                return dispatch(showSuccessSnackbar('success', data.responseMessage, 3000));
            }
            return dispatch(DefaultPasswordActions.setDefaultPasswordError());
        } catch (error) {
            dispatch(DefaultPasswordActions.setDefaultPasswordError());
            dispatch(showSuccessSnackbar('error', "Error while creating user. Please try again later", 3000));
        }
    }
}

export const getDefaultPasswordAsync = () => {
    return async (dispatch, getState) => {
        try {
            const adminBaseURL = getAdminURL(getState());
            let { _id } = getState().auth.user;
            dispatch(DefaultPasswordActions.getDefaultPasswordStart());
            const { data } = await axios({
                method: "GET",
                url: `${process.env.REACT_APP_HOST}${adminBaseURL}/getDefaultPassword/${_id}`,
                headers: {
                    'Content-Type': "application/json"
                },
            });
            if (data.responseCode === 200) {
                return dispatch(DefaultPasswordActions.getDefaultPasswordSuccess(data.responseData));
            }
            return dispatch(DefaultPasswordActions.getDefaultPasswordError());
        } catch (error) {
            dispatch(DefaultPasswordActions.getDefaultPasswordError());
            dispatch(showSuccessSnackbar('error', "Error while creating user. Please try again later", 3000));
        }
    }
}