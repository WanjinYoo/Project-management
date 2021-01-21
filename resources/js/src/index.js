import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import  config  from "./redux/configureStore";
import { PersistGate } from 'redux-persist/integration/react'

import App from "./app";

const { store,persistor} = config();
function Index(props) {

    return (
       <App />
    );
}
export default (Index);

if (document.getElementById("root")) {
    ReactDOM.render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Index />
            </PersistGate>
        </Provider>,
        document.getElementById("root")
    );
}
