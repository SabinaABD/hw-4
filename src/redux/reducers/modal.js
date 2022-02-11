const initialState = {
    loginStatus: false,
    signInStatus: false,
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_LOGIN_MODAL': {
            return {
                ...state,
                loginStatus: true,
            };
        }

        case 'HIDE_MODAL': {
            return {
                ...state,
                loginStatus: false,
                signInStatus: false,
            }
        }
        case 'SHOW_SIGNIN_MODAL': {
            return {
                ...state,
                signInStatus: true,
            };
        }

        default: {
            return {
                ...state
            }
        }

    }

}

export default modalReducer