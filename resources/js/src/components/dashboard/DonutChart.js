// @flow
import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { Donut, Legend, ResponsiveContainer } from "britecharts-react";

// donut chart
const DonutChart = () => {
    const donutData = [
        { name: "Active Tickets", id: 1, quantity: 86, percentage: 5 },
        { name: "Overdue Tickets", id: 2, quantity: 300, percentage: 18 },
        {
            name: "Almost Due",
            id: 3,
            quantity: 276,
            percentage: 16
        },
        {
            name: "Waiting Approval",
            id: 4,
            quantity: 195,
            percentage: 11
        }
        // { name: "Sparkling", id: 5, quantity: 36, percentage: 2 },
        // { name: "Other", id: 0, quantity: 814, percentage: 48 }
    ];

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-4">Donut Chart</h4>
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
                                            "#6c757d",
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
                                        numberFormat={"s"}
                                        colorSchema={[
                                            "#727cf5",
                                            "#0acf97",
                                            "#6c757d",
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
