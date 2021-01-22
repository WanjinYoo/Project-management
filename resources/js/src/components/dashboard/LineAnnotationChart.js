// @flow
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Card, CardBody } from "reactstrap";
import axios from "axios";
// line chart with annotations

const LineAnnotationChart = () => {
    const [gtdata, setGTicketData] = useState([]);

    useEffect(() => {
        axios.get("/api/tickets").then(res => {
            setGTicketData(res.data);
        });
    }, []);

    const apexLineChartWithAnnotationOpts = {
        annotations: {
            yaxis: [
                {
                    y: 8200,
                    borderColor: "#0acf97",
                    label: {
                        borderColor: "#0acf97",
                        style: {
                            color: "#fff",
                            background: "#0acf97"
                        },
                        text: "Support"
                    }
                }
            ],
            xaxis: [
                {
                    x: new Date("23 Nov 2017").getTime(),
                    borderColor: "#775DD0",
                    label: {
                        borderColor: "#775DD0",
                        style: {
                            color: "#fff",
                            background: "#775DD0"
                        },
                        text: "Anno Test"
                    }
                },
                {
                    x: new Date("03 Dec 2017").getTime(),
                    borderColor: "#ffbc00",
                    label: {
                        borderColor: "#ffbc00",
                        style: {
                            color: "#fff",
                            background: "#ffbc00"
                        },
                        orientation: "horizontal",
                        text: "New Beginning"
                    }
                }
            ],
            points: [
                {
                    x: new Date("27 Nov 2017").getTime(),
                    y: 8506.9,
                    marker: {
                        size: 8,
                        fillColor: "#fff",
                        strokeColor: "#fa5c7c",
                        radius: 2
                    },
                    label: {
                        borderColor: "#fa5c7c",
                        offsetY: 0,
                        style: {
                            color: "#fff",
                            background: "#fa5c7c"
                        },

                        text: "Point Annotation"
                    }
                }
            ]
        },
        chart: {
            height: 380,
            type: "line",
            id: "areachart-2"
        },
        labels: [
            "2020-02-24 16:17:59",
            "2020-12-30 07:37:45",
            "2020-07-31 18:04:55",
            "2020-09-18 14:23:57",
            "2020-08-29 01:08:23",
            "2020-02-22 02:53:21",
            "2020-12-08 00:55:48",
            "2020-10-14 12:29:35",
            "2020-03-14 05:32:32",
            "2021-01-04 18:14:48",
            "2020-06-30 02:25:18",
            "2020-07-26 09:45:28",
            "2020-08-10 21:27:07",
            "2020-08-26 19:48:08",
            "2020-05-26 00:28:23",
            "2020-05-16 13:49:27",
            "2020-02-21 07:39:39",
            "2021-01-08 04:51:24",
            "2020-01-20 06:23:41",
            "2020-05-09 04:52:09",
            "2020-09-21 23:12:16",
            "2020-05-21 08:02:17",
            "2020-11-22 11:58:29",
            "2020-07-04 04:16:27",
            "2020-04-06 02:21:05",
            "2020-02-04 16:10:18",
            "2021-01-15 03:44:00",
            "2020-02-22 21:08:28",
            "2020-01-29 07:14:54"
        ],
        colors: ["#39afd1"],
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [3],
            curve: "straight"
        },
        title: {
            text: "INSERT PROJECT HERE",
            align: "left"
        },
        xaxis: {
            type: "datetime"
        },
        grid: {
            row: {
                colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.2
            },
            borderColor: "#f1f3fa"
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: {
                        toolbar: {
                            show: false
                        }
                    },
                    legend: {
                        show: false
                    }
                }
            }
        ]
    };

    const apexLineChartWithAnnotationData = [
        {
            name: "Prices",
            data: [
                8107.85,
                8128,
                8122.9,
                8165.5,
                8340.7,
                8423.7,
                8423.5,
                8514.3,
                8481.85,
                8487.7,
                8506.9,
                8626.2,
                8668.95,
                8602.3,
                8607.55,
                8512.9,
                8496.25,
                8600.65,
                8881.1,
                9340.85
            ]
        }
    ];

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">Overall Open Tickets</h4>
                <Chart
                    options={apexLineChartWithAnnotationOpts}
                    series={apexLineChartWithAnnotationData}
                    type="line"
                    className="apex-charts"
                />
            </CardBody>
        </Card>
    );
};

export default LineAnnotationChart;
