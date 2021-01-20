import RenderStats from "./RenderTicketStat";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TicketHome() {
    const [ticket, setTicket] = useState([]);

    useEffect(() => {
        axios.get("/api/tickets").then(res => {
            setTicket(res.data);
        });
    }, []);

    const ticketData = <RenderStats num={50} />;

    return (
        <React.Fragment>
            <ul className="TicketNumStats">{ticketData}</ul>
        </React.Fragment>
    );
}
