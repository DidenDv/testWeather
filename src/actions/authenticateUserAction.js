import { AUTHENTICATION_ERROR, AUTHENTICATION_LOADED, AUTHENTICATION_LOADING } from '../constants/constants';

// fake data
const getFakeData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            user: 'name'
        });
    }, 1000);
});

export function authenticateUser() {
    return (dispatch) => {
        dispatch({
            type: AUTHENTICATION_LOADING,
        });

        getFakeData.then((response) => {
                dispatch({
                    type: AUTHENTICATION_LOADED,
                    payload: {
                        data: response,
                    },
                });
            }).catch((error) => {
                dispatch({
                    type: AUTHENTICATION_ERROR,
                    payload: error.response,
                });
            });
    };
}
