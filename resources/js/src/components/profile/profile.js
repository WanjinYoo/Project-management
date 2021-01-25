import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import ProfileForm from "./profileForm";
import { connect } from "react-redux";
import axios from "axios";
const mapStateToProps = state => {
    return {
        logIn: state.logIn
    };
};

const Profile = props => {
    const [data, setData] = useState([]);
    console.log(props.logIn);
    let userID = 4;
    useEffect(() => {
        axios.get(`/api/users/${userID}`).then(res => {
            setData(res.data);
        });
    }, []);

    let lastEdit;
    if (data.uptdated_at === undefined) {
        lastEdit = "Never";
    }
    return (
        <div>
            <h1>Edit Profile</h1>{" "}
            <h5>{`Profile Created: ${Date(data.created_at)}`}</h5>
            <h5>{`Last Edit: ${lastEdit}`}</h5>
            <ProfileForm />
        </div>
    );
};
export default connect(mapStateToProps)(Profile);
