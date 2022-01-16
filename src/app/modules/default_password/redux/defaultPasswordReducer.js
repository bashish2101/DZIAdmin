import { DefaultPasswordMap } from './defaultPasswordAction';

const initialState = {
    isLoading: false,
    defaultPassword: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DefaultPasswordMap.SET_DEFAULT_PASSWORD_START: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case DefaultPasswordMap.SET_DEFAULT_PASSWORD_SUCCESS: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case DefaultPasswordMap.SET_DEFAULT_PASSWORD_ERROR: {
            return {
                ...state,
            }
        }
        case DefaultPasswordMap.GET_DEFAULT_PASSWORD_START: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case DefaultPasswordMap.GET_DEFAULT_PASSWORD_SUCCESS: {
            return {
                ...state,
                isLoading: true,
                defaultPassword: action.payload.defaultPassword
            }
        }
        case DefaultPasswordMap.GET_DEFAULT_PASSWORD_ERROR: {
            return {
                ...state,
            }
        }
        default: return { ...state }
    }
}   