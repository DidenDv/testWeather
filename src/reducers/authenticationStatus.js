import {
    AUTHENTICATION_ERROR,
    AUTHENTICATION_LOADED,
    AUTHENTICATION_LOADING,
} from '../constants/constants';

const initialState = {
    isLogged: false,
    error: null,
    isLoading: null,
    userData: null
};

export function authenticationReducer(state = initialState, action) {
    switch (action.type) {
    case AUTHENTICATION_LOADING:
        return {
            ...state,
            isLogged: false,
            isLoading: true,
            error: null,
        };
    case AUTHENTICATION_LOADED:
        return {
            ...state,
            isLoading: false,
            isLogged: true,
            userData: action.payload.data,
            error: null,
        };
    case AUTHENTICATION_ERROR:
        return {
            ...state,
            isLoading: false,
            isLogged: false,
            error: action.payload,
        };
    default:
        return state;
    }
}
