import React from "react";
import LineAnnotationChart from "./LineAnnotationChart";
import StatisticsWidget from "../hyper/components/StatisticsWidget";
import Clock from "react-live-clock";

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />
            <StatisticsWidget />
            <LineAnnotationChart />
        </div>
    );
}
