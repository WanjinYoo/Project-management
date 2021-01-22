import React, { useState, useEffect } from "react";
// import LineAnnotationChart from "./LineAnnotationChart";
// import Progress from "./Progress";
import Clock from "react-live-clock";
import TotalTicketNum from "./TotalTicketNum.js";
import ActiveTicketNum from "./ActiveTicketNum.js";
import WaitingApprovalNum from "./WaitingApprovalNum.js";
import OverdueTicketNum from "./OverdueTicketNum.js";
import AlmostTicketNum from "./AlmostTicketNum.js";
import Chart from "./DonutChart.js";
import "../../componentsstyling/dashboard.scss";

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* <Progress /> */}
            <div className="dashboardRender">
                <Chart />
                <div id="dashboardSide">
                    <div id="dashboardClock">
                        <p>Today is: </p>
                        <Clock
                            format={"dddd, MMMM Mo, YYYY"}
                            timezone={"US/Pacific"}
                        />
                        <p>The time is: </p>
                        <Clock
                            format={"h:mm:ss A"}
                            ticking={true}
                            timezone={"US/Pacific"}
                        />
                    </div>
                    <TotalTicketNum />
                    <ActiveTicketNum />
                    <WaitingApprovalNum />
                    <OverdueTicketNum />
                    <AlmostTicketNum />
                </div>
                {/* <div id="ticketStats">
                    <LineAnnotationChart />
                </div> */}
            </div>
        </div>
    );
}
