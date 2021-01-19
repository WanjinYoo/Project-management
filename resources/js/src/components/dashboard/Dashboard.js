import React from "react";
import LineAnnotationChart from "./LineAnnotationChart";
import StatisticsWidget from "../hyper/components/StatisticsWidget.js";
import Clock from "react-live-clock";
import "../../componentsstyling/dashboard.scss";

export default function Dashboard() {
    return (
        <div className="dashboardRender">
            <div>
                <h1>Dashboard</h1>
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
                <StatisticsWidget />
            </div>
            <div id="ticketStats">
                <LineAnnotationChart />
            </div>
        </div>
    );
}
