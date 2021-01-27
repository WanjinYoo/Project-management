import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { connect } from "react-redux";
const localizer = momentLocalizer(moment);
import "react-big-calendar/lib/sass/styles.scss";
import axios from "axios";

const mapStateToProps = state => {
    return {
        logIn: state.logIn
    };
};

const fCalendar = props => {
    const [values, setData] = useState();
    const [tvalues, settData] = useState();
    let state = {
        events: []
    };
    let userID = props.logIn.userId;
    useEffect(() => {
        axios.get(`/api/tickets`).then(res => {
            setData(res.data), run(), console.log(res.data);
        });
    }, []);

    const run = () => {
        console.log(values);
        for (let b in values) {
            if (values[b].receiver_id === userID) {
                settData({ ...tvalues, b: values[b] });
            }
        }

        console.log(tvalues);
    };

    return (
        <div>
            <h1>Your Calendar</h1>
            <Calendar
                localizer={localizer}
                events={state.events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
};
export default connect(mapStateToProps)(fCalendar);
