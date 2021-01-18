import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reducer from "./redux/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Tickets from "./components/tickets";
import Progress from "./components/progress";
import Settings from "./components/settings";
import Navbar from "./components/Navbar";
import HorizontalNavbar from "./components/HorizontalNavbar";
import Dashboard from "./components/dashboard/Dashboard";

const store = createStore(reducer);

function Index(props) {
    return (
        <BrowserRouter>
            <div className="row">
                <Navbar />
                <div className="main-container">
                    <div className="row">
                        <HorizontalNavbar />
                    </div>

                    <Switch>
                        <Route exact={true} path="/" component={Dashboard} />
                        <Route path="/tickets" component={Tickets} />
                        <Route path="/progress" component={Progress} />
                        <Route path="/settings" component={Settings} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Index;

if (document.getElementById("root")) {
    ReactDOM.render(
        <Provider store={store}>
            <Index />
        </Provider>,
        document.getElementById("root")
    );
}
