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
    // const [values, setData] = useState([]);
    // let userID = props.logIn.userId;
    // useEffect(() => {
    //     axios.get(`/api/users/${userID}`).then(res => {
    //         setData(res.data);
    //     });
    // }, []);

    // const onUpdate = () => {
    //     alert("Profile Updated");
    //     console.log(values);
    //     axios.put(`/api/users/${userID}`, values).then(res => console.log(res));
    // };
    // const handleInputChange = e => {
    //     const { name, value } = e.target;
    //     setData({ ...values, [name]: value });
    // };
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
