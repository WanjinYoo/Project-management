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
            let ticketTime = new Date(tdata[b].deadline);
            let currentTime = new Date();

            if (
                tdata[b].project_id === 1 &&
                tdata[b].status_id === 2 &&
                currentTime > ticketTime
            ) {
                adata++;
            }
        }
    }

    const ticketData = <RenderStats num={adata} />;
    return (
        <React.Fragment>
            <div id="ticketNumStats">
                <p>OverDue tickets</p>
                <ul>{ticketData}</ul>
            </div>
        </React.Fragment>
    );
}
