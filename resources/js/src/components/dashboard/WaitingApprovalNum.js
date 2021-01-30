import RenderStats from "./RenderTicketStat";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NumWidget from "../hyper/components/StatisticsWidget";

export default function WaitingApprovalTicket(props) {
    const [tdata, setTicketData] = useState([]);
    let projectID = props.projectid;
    let userID = props.id;

    useEffect(() => {
        axios.get("/api/tickets").then(res => {
            setTicketData(res.data);
        });
        return () => {
            setTicketData(null);
        }
    }, []);

    let adata = 0;

    if (tdata[0] !== undefined) {
        for (let b in tdata) {
            if (tdata[b].receiver_id === userID && tdata[b].status_id === 3) {
                adata++;
            }
        }
    }

    const ticketData = <RenderStats num={adata} />;
    return (
        <React.Fragment>
            <div id="ticketNumStats">
                <NumWidget title="Pending Approval" stats={adata} />
            </div>
        </React.Fragment>
    );
}
