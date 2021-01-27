import React, { useState } from "react";
import Caslendar from "react-calendar";

const [value, onChange] = useState(new Date());

export default function Calendar(props) {
    return (
        <div>
            <h1>Your Calendar</h1>
            <div>
                <Caslendar onChange={onChange} value={value} />
            </div>
        </div>
    );
}
