import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const mapStateToProps = state => {
    return {
        logIn: state.logIn,
        pageContent: state.pageContent
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeContent: content =>
            dispatch({ type: "GET_CONTENT", content: content })
    };
};
const ProfileForm = props => {
    const [values, setData] = useState([]);
    const [uvalues, setuData] = useState([]);
    let userID = props.logIn.userId;
    let ID = props.Pid;
    useEffect(() => {
        axios.get(`/api/projects/${ID}`).then(res => {
            setData(res.data);
        });
    }, []);

    const onUpdate = () => {
        alert("Ticket Created!"), props.changeContent("projectdashboard");
        // console.log(values);
        // axios.put(`/api/users/${userID}`, values).then(res => console.log(res));
    };
    const handleInputChange = e => {
        const { name, value } = e.target;
        setData({ ...values, [name]: value });
    };
    return (
        <div>
            <div>
                <TextField
                    label="Project Name"
                    style={{ margin: 8 }}
                    value={values.name}
                    name="name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    label="Issuer Email"
                    style={{ margin: 8 }}
                    value={values.issuer_email}
                    name="last_name"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    label="Receiver Email"
                    required
                    name="email"
                    style={{ margin: 8 }}
                    value={values.email}
                    fullWidth
                    onChange={handleInputChange}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    label="Status"
                    style={{ margin: 8 }}
                    value={values.password}
                    name="password"
                    onChange={handleInputChange}
                    fullWidth
                    required
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    label="Priority"
                    style={{ margin: 8 }}
                    value={values.telephone}
                    name="telephone"
                    fullWidth
                    onChange={handleInputChange}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    label="Description"
                    style={{ margin: 8 }}
                    value={values.slack_account}
                    name="slack_account"
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    label="Start_at"
                    style={{ margin: 8 }}
                    value={values.team}
                    onChange={handleInputChange}
                    name="team"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    label="Subject"
                    style={{ margin: 8 }}
                    name="position"
                    value={values.position}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to={{
                    pathname: "/projectdashboard",
                    aboutProps: {
                        id: props.Pid,
                        isManager: 1
                    }
                }}
                onClick={onUpdate}
            >
                CREATE
            </Button>
        </div>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
