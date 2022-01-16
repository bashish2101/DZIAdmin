export const DefaultPasswordMap = {
    SET_DEFAULT_PASSWORD_START: 'SET_DEFAULT_PASSWORD_START',
    SET_DEFAULT_PASSWORD_SUCCESS: 'SET_DEFAULT_PASSWORD_SUCCESS',
    SET_DEFAULT_PASSWORD_ERROR: 'SET_DEFAULT_PASSWORD_ERROR',
    GET_DEFAULT_PASSWORD_START: 'GET_DEFAULT_PASSWORD_START',
    GET_DEFAULT_PASSWORD_SUCCESS: 'GET_DEFAULT_PASSWORD_SUCCESS',
    GET_DEFAULT_PASSWORD_ERROR: 'GET_DEFAULT_PASSWORD_ERROR',
}

export const DefaultPasswordActions = {
    setDefaultPasswordStart: (data) => ({ type: DefaultPasswordMap.SET_DEFAULT_PASSWORD_START, payload: data }),
    setDefaultPasswordSuccess: (data) => ({ type: DefaultPasswordMap.SET_DEFAULT_PASSWORD_SUCCESS, payload: data }),
    setDefaultPasswordError: (errors) => ({ type: DefaultPasswordMap.SET_DEFAULT_PASSWORD_ERROR, payload: { errors } }),

    getDefaultPasswordStart: (data) => ({ type: DefaultPasswordMap.GET_DEFAULT_PASSWORD_START, payload: data }),
    getDefaultPasswordSuccess: (data) => ({ type: DefaultPasswordMap.GET_DEFAULT_PASSWORD_SUCCESS, payload: data }),
    getDefaultPasswordError: (errors) => ({ type: DefaultPasswordMap.GET_DEFAULT_PASSWORD_ERROR, payload: { errors } }),
}  