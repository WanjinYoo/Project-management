import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import BewTicketForm from "./newTicketForm";
import { Menu, MenuItem, Typography } from "@material-ui/core";

import { connect } from "react-redux";
import axios from "axios";
import Clock from "react-live-clock";

const mapStateToProps = state => {
    return {
        logIn: state.logIn
    };
};

const newTicket = props => {
    const [data, setData] = useState([]);
    let userID = props.logIn.userId;
    useEffect(() => {
        axios.get(`/api/users/${userID}`).then(res => {
            setData(res.data);
        });
    }, []);

    let lastEdit;
    if (data.uptdated_at === undefined) {
        lastEdit = "Never";
    }
    return (
        <div>
            <h1>Create New Ticket</h1>{" "}
            <Typography component="h1" variant="h6" noWrap>
                Ticket will be created on:{" "}
                <Clock format={"dddd, MMMM Mo, YYYY"} timezone={"US/Pacific"} />{" "}
                at:{" "}
                <Clock
                    format={"h:mm:ss A"}
                    ticking={true}
                    timezone={"US/Pacific"}
                />{" "}
                GMT-0800 (Pacific Standard Time)
            </Typography>
            <BewTicketForm Pid={props.location.aboutProps.id} />
        </div>
    );
};
export default connect(mapStateToProps)(newTicket);
