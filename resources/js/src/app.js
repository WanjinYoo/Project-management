import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Tickets from "./components/tickets/tickets";
import Progress from "./components/progress";
import Settings from "./components/settings";
import Project from "./components/projects/projects";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import HorizontalNavbar from "./components/HorizontalNavbar";
import Dashboard from "./components/dashboard/Dashboard";
import Calendar from "./components/Calendar";
import Home from "./components/home";
import adminDash from "./components/adminDash/adminDash";
import "./app.scss";
import projects from "./components/projects/projects";

const mapStateToProps = state => {
    return {
        logIn: state.logIn
    };
};
const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingRight: 24 // keep right padding when drawer closed
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    root: {
        display: "flex"
    }
}));

function App(props) {
    const classes = useStyles();
    return (
        <BrowserRouter>
            {props.logIn.isLoggedIn && (
                <div className={classes.root}>
                    <HorizontalNavbar />

                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Container maxWidth="lg" className={classes.container}>
                            <Switch>
                                <Route
                                    exact={true}
                                    path="/"
                                    component={Dashboard}
                                />
                                <Route path="/projects" component={Project} />
                                <Route path="/tickets" component={Tickets} />
                                <Route path="/calendar" component={Calendar} />
                                <Route path="/progress" component={Progress} />
                                <Route path="/report" component={Settings} />
                                <Route
                                    path="/adminDash"
                                    component={adminDash}
                                />
                            </Switch>
                        </Container>
                    </main>
                </div>
            )}
            {!props.logIn.isLoggedIn && <Home />}
        </BrowserRouter>
    );
}

export default connect(mapStateToProps)(App);
