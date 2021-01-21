const initialState = {
    pageContent: "Dashboard",
    logIn: {
        isLoggedIn: false,
        userId: null
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CONTENT":
            return {
                ...state,
                pageContent: action.content
            };
        case "LOG_IN_USER":
            return {
                    ...state,
                    logIn: {
                        isLoggedIn: action.logIn,
                        userId: action.userid
                    }
                };

        default:
            return state;
    }
};

export default reducer;
