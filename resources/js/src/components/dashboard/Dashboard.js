import React, { useState, useEffect } from "react";

import Clock from "react-live-clock";
import TotalTicketNum from "./TotalTicketNum.js";
import ActiveTicketNum from "./ActiveTicketNum.js";
import WaitingApprovalNum from "./WaitingApprovalNum.js";
import OverdueTicketNum from "./OverdueTicketNum.js";
import AlmostTicketNum from "./AlmostTicketNum.js";
import OpenProjectNum from "./OpenProjectNum.js";
import PendingTicketNum from "./PendingTicketNum.js";
import RejectedTicketNum from "./RejectedTicketNum.js";
import NewTicketNum from "./NewTicketNum.js";
import Chart from "./DonutChart.js";
import "../../componentsstyling/dashboard.scss";

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>{" "}
            <div id="dashboardClock">
                <p>Today is: </p>
                <Clock format={"dddd, MMMM Mo, YYYY"} timezone={"US/Pacific"} />
                <p>The time is: </p>
                <Clock
                    format={"h:mm:ss A"}
                    ticking={true}
                    timezone={"US/Pacific"}
                />
            </div>
            <div className="dashboardRender">
                <Chart />
                <div id="widgetBar">
                    <div id="dashStatWidgets">
                        <OverdueTicketNum />
                        <AlmostTicketNum />
                        <WaitingApprovalNum />
                    </div>
                    <div id="dashStatWidgets">
                        <RejectedTicketNum />
                        <NewTicketNum />
                        <PendingTicketNum />
                    </div>
                    <div id="dashStatWidgets">
                        <ActiveTicketNum />
                        <TotalTicketNum />
                        <OpenProjectNum />
                    </div>
                </div>
            </div>
        </div>
    );
}
