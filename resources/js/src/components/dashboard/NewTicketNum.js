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

    let adata = 0;

    if (tdata[0] !== undefined) {
        for (let b in tdata) {
            let ticketTime = new Date(tdata[b].created_at);
            let currentTime = new Date();
            if (
                tdata[b].project_id === 1 &&
                ticketTime - currentTime < 86400000 &&
                ticketTime - currentTime > 0
            ) {
                adata++;
            }
        }
    }

    const ticketData = <RenderStats num={adata} />;
    return (
        <React.Fragment>
            <div id="ticketNumStats">
                <p>New Tickets</p>
                <ul>{ticketData}</ul>
            </div>
        </React.Fragment>
    );
}
