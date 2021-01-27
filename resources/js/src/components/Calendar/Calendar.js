import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
const localizer = momentLocalizer(moment);
import "react-big-calendar/lib/sass/styles.scss";
export default function fCalendar() {
    let state = {
        events: []
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
}
