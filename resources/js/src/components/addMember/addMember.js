import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { connect } from "react-redux";
import MemberTable from "./memberTable";

const mapStateToProps = state => {
    return {
        logIn: state.logIn
    };
};

const addMember = props => {
    const [values, setData] = useState([]);
    let userID = props.logIn.userId;
    const [fName, setfName] = useState();
    const [lName, setlName] = useState();
    const [Lemail, setEmail] = useState();

    let filted = {};
    useEffect(() => {
        axios.get(`/api/users/`).then(res => {
            setData(res.data);
        });
    }, []);

    const onSearch = () => {
        for (let u in values) {
            if (values[u].email === Lemail) {
                console.log("SLD:FJS:DLKJFLKSDF:SDLKJ:");
                filted.email = values[u].email;
            }
        }
        console.log(filted);
        console.log(Lemail);
    };
    const handleInputChange = e => {
        const { name, value } = e.target;
        setData({ ...values, [name]: value });
    };
    return (
        <div>
            <div>
                <h1>Add Member</h1>
                <div>
                    <TextField
                        label="Email"
                        required
                        name="email"
                        style={{ margin: 8 }}
                        value={values.email}
                        fullWidth
                        onChange={event => {
                            setEmail(event.target.value);
                            console.log("does this work?");
                        }}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                        variant="outlined"
                    />
                    <TextField
                        label="First Name"
                        style={{ margin: 8 }}
                        value={values.first_name}
                        name="first_name"
                        fullWidth
                        margin="normal"
                        onChange={event => setfName(event.target.value)}
                        InputLabelProps={{
                            shrink: true
                        }}
                        variant="outlined"
                    />
                    <TextField
                        label="Last Name"
                        style={{ margin: 8 }}
                        value={values.last_name}
                        name="last_name"
                        fullWidth
                        margin="normal"
                        onChange={event => setlName(event.target.value)}
                        InputLabelProps={{
                            shrink: true
                        }}
                        variant="outlined"
                    />
                </div>
                <Button variant="contained" color="primary" onClick={onSearch}>
                    SEARCH
                </Button>
            </div>

            <MemberTable />
        </div>
    );
};
export default connect(mapStateToProps)(addMember);
