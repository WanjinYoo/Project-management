import React, { useState, useEffect } from "react";
import LineAnnotationChart from "./LineAnnotationChart";
import Progress from "./Progress";
import StatisticsWidget from "../hyper/components/StatisticsWidget.js";
import Clock from "react-live-clock";
import TicketNum from "./TicketNum.js";
import "../../componentsstyling/dashboard.scss";
import axios from "axios";

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Progress />
            <div className="dashboardRender">
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
                    <TicketNum />
                </div>
                <div id="ticketStats">
                    <LineAnnotationChart />
                </div>
            </div>
        </div>
    );
}
