import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reducer from "./redux/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from 'react-redux';
import Tickets from "./components/tickets/tickets";
import Progress from "./components/progress";
import Settings from "./components/settings";
import Navbar from "./components/Navbar";
import HorizontalNavbar from "./components/HorizontalNavbar";
import Dashboard from "./components/dashboard/Dashboard";
import Calendar from "./components/Calendar";
import Home from "./components/home"

const store = createStore(reducer);
const mapStateToProps = state => {
    return {
        logIn: state.logIn,
    };
  }

function Index(props) {
    return (
        <BrowserRouter>
             {props.logIn &&
            <div className="row">
                <Navbar />
                <div className="main-container">
                    <div className="row" id="horizontalNav">
                        <HorizontalNavbar />
                    </div>
                    <div className="mainElements">
                        <Switch>
                            <Route
                                exact={true}
                                path="/"
                                component={Dashboard}
                            />
                            <Route path="/tickets" component={Tickets} />
                            <Route path="/calendar" component={Calendar} />
                            <Route path="/progress" component={Progress} />
                            <Route path="/settings" component={Settings} />
                        </Switch>
                    </div>
                </div>
            </div>
            }
            {!props.logIn && <Home />}

        </BrowserRouter>
    );
}

export default connect(mapStateToProps)(Index);

if (document.getElementById("root")) {
    ReactDOM.render(
        <Provider store={store}>
            <Index />
        </Provider>,
        document.getElementById("root")
    );
}
