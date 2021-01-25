// @flow
import React, { useState, useEffect } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { Donut, Legend, ResponsiveContainer } from "britecharts-react";
import axios from "axios";
// donut chart
const DonutChart = props => {
    const [tdata, setTicketData] = useState([]);
    let projectID = props.projectid;
    let userID = props.id;

    useEffect(() => {
        axios.get("/api/tickets").then(res => {
            setTicketData(res.data);
        });
    }, []);

    let adata = 0;
    let odata = 0;
    let aldata = 0;
    let wadata = 0;
    let rdata = 0;

    //all active tickets
    if (tdata[0] !== undefined) {
        for (let b in tdata) {
            if (tdata[b].receiver_id === userID && tdata[b].status_id !== 4) {
                aldata++;
            }
        }
    }

    //rejected tickets
    if (tdata[0] !== undefined) {
        for (let b in tdata) {
            if (tdata[b].receiver_id === userID && tdata[b].status_id === 5) {
                rdata++;
            }
        }
    }

    //pending work teickets
    if (tdata[0] !== undefined) {
        for (let b in tdata) {
            if (tdata[b].receiver_id === userID && tdata[b].status_id === 2) {
                adata++;
            }
        }
    }

    //Overdue tickets
    if (tdata[0] !== undefined) {
        for (let b in tdata) {
            let ticketTime = new Date(tdata[b].deadline);
            let currentTime = new Date();

            if (
                tdata[b].receiver_id === userID &&
                tdata[b].status_id !== 4 &&
                currentTime > ticketTime
            ) {
                odata++;
            }
        }
    }

    //Waiting approval tickets
    if (tdata[0] !== undefined) {
        for (let b in tdata) {
            if (tdata[b].receiver_id === userID && tdata[b].status_id === 3) {
                wadata++;
            }
        }
    }

    //Percentage calculations
    let pdataPercent = Math.round((adata / aldata) * 100);
    let odataPercent = Math.round((odata / aldata) * 100);
    let wadataPercent = Math.round((wadata / aldata) * 100);
    let rdataPercent = Math.round((rdata / aldata) * 100);

    const donutData = [
        {
            name: "Pending Work",
            id: 1,
            quantity: adata,
            percentage: pdataPercent
        },
        {
            name: "Waiting Approval",
            id: 3,
            quantity: wadata,
            percentage: wadataPercent
        },
        {
            name: "Overdue Tickets",
            id: 2,
            quantity: odata,
            percentage: odataPercent
        },

        {
            name: "Rejected Tickets",
            id: 4,
            quantity: rdata,
            percentage: rdataPercent
        }
        // { name: "Sparkling", id: 5, quantity: 36, percentage: 2 },
        // { name: "Other", id: 0, quantity: 814, percentage: 48 }
    ];

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-4">
                    You have {aldata} Active tickets
                </h4>
                <div className="donut-container">
                    <ResponsiveContainer
                        render={() => (
                            <Col>
                                <Col>
                                    <Donut
                                        data={donutData}
                                        height={300}
                                        internalRadius={80}
                                        colorSchema={[
                                            "#727cf5",
                                            "#0acf97",
                                            "#ffbc00",
                                            "#fa5c7c",
                                            "#ffbc00",
                                            "#39afd1"
                                        ]}
                                        isAnimated={true}
                                        hasFixedHighlightedSlice={true}
                                    />
                                </Col>
                                <Col>
                                    <Legend
                                        data={donutData}
                                        height={200}
                                        width={250}
                                        numberFormat={"i"}
                                        colorSchema={[
                                            "#727cf5",
                                            "#0acf97",
                                            "#ffbc00",
                                            "#fa5c7c",
                                            "#ffbc00",
                                            "#39afd1"
                                        ]}
                                        margin={{
                                            top: 10,
                                            bottom: 10,
                                            left: 0,
                                            right: 30
                                        }}
                                    />
                                </Col>
                            </Col>
                        )}
                    />
                </div>
            </CardBody>
        </Card>
    );
};

export default DonutChart;
