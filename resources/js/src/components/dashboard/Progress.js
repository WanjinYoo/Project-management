// @flow
import React from "react";
import { Row, Col, Card, CardBody, Progress } from "reactstrap";

const WithLabels = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Progress of PROJECT</h4>
                <p className="text-muted font-14">
                    overall status of project with label
                </p>

                <Progress value={25}>25%</Progress>
            </CardBody>
        </Card>
    );
};

export default WithLabels;
