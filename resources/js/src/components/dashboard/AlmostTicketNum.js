import RenderStats from "./RenderTicketStat";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NumWidget from "../hyper/components/StatisticsWidget";

export default function AlmostTicket(props) {
    const [tdata, setTicketData] = useState([]);
    let projectID = props.projectid;
    let userID = props.id;

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
                tdata[b].receiver_id === userID &&
                tdata[b].status_id === 2 &&
                ticketTime - currentTime < 86400000 &&
                ticketTime - currentTime > 0
            ) {
                adata++;
                // console.log(tdata[b]);
            }
        }
    }

    const ticketData = <RenderStats num={adata} />;
    return (
        <React.Fragment>
            <div id="ticketNumStats">
                <NumWidget title="Tickets Almost Due" stats={adata} />
            </div>
        </React.Fragment>
    );
}
// <div id="ticketNumStats">
//     <p>Tickets Almost Due</p>
//     <ul>{ticketData}</ul>
// </div>
