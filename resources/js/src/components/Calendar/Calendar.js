import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { connect } from "react-redux";
import "react-big-calendar/lib/sass/styles.scss";
import axios from "axios";

const localizer = momentLocalizer(moment);
const mapStateToProps = state => {
    return {
        logIn: state.logIn
    };
};

const fCalendar = props => {
    let eventData = [];
    const [values, setData] = useState();
    const [tvalues, settData] = useState({});
    const [devents, setdEvents] = useState([]);
    let dataF = [];
    let userID = props.logIn.userId;
    useEffect(() => {
        axios.get(`/api/tickets`).then(res => {
            setData(res.data), filterData(res.data);
        });
    }, []);

    const filterData = fdata => {
        for (let b in fdata) {
            if (fdata[b].receiver_id === userID) {
                dataF.push(fdata[b]);

                settData({ ...tvalues, b: fdata[b] });
            }
        }
        console.log(dataF);

        for (let a in dataF) {
            eventData.push({
                title: dataF[a].description,
                start: new Date(dataF[a].deadline),
                end: new Date(dataF[a].deadline),
                allDay: false
                // resource: undefined
            });
        }
        setdEvents(eventData);
        console.log(eventData);
        // let filtereD = fdata.filter(item => item.receiver_id.includes(userID));
    };

    return (
        <div>
            <h1>Your Calendar</h1>
            <h3>Showing Ticket Deadlines</h3>
            <Calendar
                localizer={localizer}
                events={devents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
};
export default connect(mapStateToProps)(fCalendar);
