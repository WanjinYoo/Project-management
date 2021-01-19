import React from "react";
import LineAnnotationChart from "./LineAnnotationChart";
import Progress from "./Progress";
import StatisticsWidget from "../hyper/components/StatisticsWidget.js";
import Clock from "react-live-clock";
import "../../componentsstyling/dashboard.scss";

export default function Dashboard() {
    return (
        <div>
            <div className="dashboardRender">
                <div id="dashboardSide">
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
                    <StatisticsWidget />
                </div>
                <div id="ticketStats">
                    <LineAnnotationChart />
                </div>
            </div>
            <Progress />
        </div>
    );
}
