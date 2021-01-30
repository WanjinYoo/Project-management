import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        logIn: state.logIn
    };
};

const ReportForm = props => {
    return (
        <div>
            <div>
                <TextField
                    label="Initial Date"
                    style={{ margin: 8 }}
                    value={""}
                    name="first_name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Final Date"
                    style={{ margin: 8 }}
                    value={""}
                    name="last_name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Project Name"
                    style={{ margin: 8 }}
                    value={""}
                    name="last_name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Report Type"
                    style={{ margin: 8 }}
                    value={""}
                    name="last_name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />


            </div>
            <Button variant="contained" color="primary" >
                CREATE
            </Button>
        </div>
    );
};
export default connect(mapStateToProps)(ReportForm);
