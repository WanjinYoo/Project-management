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
    let personid = 20;
    let thisProjectId = 11;

    return (
        <div>
            <h1>Dashboard</h1>
            <p>
                Hello user {personid} you are on project {thisProjectId}
            </p>
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
                <Chart id={personid} projectid={thisProjectId} />
                <div id="widgetBar">
                    <div id="dashStatWidgets">
                        <OverdueTicketNum
                            id={personid}
                            projectid={thisProjectId}
                        />
                        <AlmostTicketNum
                            id={personid}
                            projectid={thisProjectId}
                        />
                        <WaitingApprovalNum
                            id={personid}
                            projectid={thisProjectId}
                        />
                    </div>
                    <div id="dashStatWidgets">
                        <NewTicketNum id={personid} projectid={thisProjectId} />
                        <PendingTicketNum
                            id={personid}
                            projectid={thisProjectId}
                        />
                        <RejectedTicketNum
                            id={personid}
                            projectid={thisProjectId}
                        />
                    </div>
                    <div id="dashStatWidgets">
                        <ActiveTicketNum
                            id={personid}
                            projectid={thisProjectId}
                        />
                        <TotalTicketNum
                            id={personid}
                            projectid={thisProjectId}
                        />
                        <OpenProjectNum
                            id={personid}
                            projectid={thisProjectId}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
