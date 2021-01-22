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
            if (tdata[b].project_id === 1) {
                adata++;
            }
        }
    }

    const ticketData = <RenderStats num={adata} />;
    return (
        <React.Fragment>
            <div id="ticketNumStats">
                <p>There are: </p>
                <ul>{ticketData}</ul>
                <p>Projects</p>
            </div>
        </React.Fragment>
    );
}
