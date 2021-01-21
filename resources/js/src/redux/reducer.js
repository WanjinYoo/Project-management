const initialState = {
    pageContent: "Dashboard",
    logIn: false
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
                    logIn: action.login
                };
        default:
            return state;
    }
};

export default reducer;
