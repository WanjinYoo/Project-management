import React from "react";
import ReactDOM from "react-dom";
import reducer from "./redux/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./app";

const store = createStore(reducer);

function Index(props) {
    return (
       <App />
    );
}
export default (Index);

if (document.getElementById("root")) {
    ReactDOM.render(
        <Provider store={store}>
            <Index />
        </Provider>,
        document.getElementById("root")
    );
}
