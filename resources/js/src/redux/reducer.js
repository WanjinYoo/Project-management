const { default: Dashboard } = require("../components/Dashboard");

const initialState = {
    pageContent: "Dashboard"
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_CONTENT":
            return {
                ...state,
                pageContent: action.content
            }
        default:
            return state;
    }
};

export default reducer;
