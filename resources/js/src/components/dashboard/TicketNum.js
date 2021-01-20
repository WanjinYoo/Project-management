import RenderStats from "./RenderTicketStat";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TicketHome() {
    const [tdata, setTicketData] = useState([]);

    useEffect(() => {
        axios.get("/api/tickets").then(res => {
            setTicketData(res.data);
        });
    }, []);
    const ticketData = <RenderStats num={tdata.length} />;

    return (
        <React.Fragment>
            <p>There are: </p>
            <ul className="TicketNumStats">{ticketData}</ul>
            <p>Active tickets.</p>
        </React.Fragment>
    );
}
