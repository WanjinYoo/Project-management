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
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [Lemail, setEmail] = useState("");
    const [filteredData, setfilterData] = useState([]);

    useEffect(() => {
        axios.get(`/api/users/`).then(res => {
            setData(res.data);
            setfilterData(res.data);
        });
    }, []);

    const onSearch = () => {
        setfilterData(values);
        let asdf = values
            .filter(item => item.first_name.includes(fName))
            .filter(item => item.email.includes(Lemail))
            .filter(item => item.last_name.includes(lName));
        setfilterData(asdf);
        // for (let u in values) {
        //     let emailString = values[u].email;
        //     let fNameString = values[u].first_name;
        //     let lNameString = values[u].last_name;
        //     if (
        //         (emailString.includes(Lemail) || Lemail == undefined) &&
        //         (fNameString.includes(fName) || fName == undefined) &&
        //         (lNameString.includes(lName) || lName == undefined)
        //     ) {

        //     }
        // }
    };

    return (
        <div>
            <div>
                <h1>Add Member</h1>
                <div>
                    <TextField
                        label="Email"
                        name="email"
                        // defaultValue="Enter Email"
                        value={values.email}
                        fullWidth
                        id="outlined-basic"
                        onKeyUp={event => {
                            setEmail(event.target.value);
                            onSearch();
                        }}
                        margin="large"
                        variant="outlined"
                    />
                    <TextField
                        label="First Name"
                        value={values.first_name}
                        name="first_name"
                        // defaultValue="Enter First Name"
                        fullWidth
                        id="outlined-basic"
                        margin="normal"
                        onKeyUp={event => {
                            setfName(event.target.value), onSearch();
                        }}
                        variant="outlined"
                    />
                    <TextField
                        label="Last Name"
                        value={values.last_name}
                        name="last_name"
                        fullWidth
                        id="outlined-basic"
                        // defaultValue="Enter Last Name"
                        margin="normal"
                        onKeyUp={event => {
                            setlName(event.target.value), onSearch();
                        }}
                        variant="outlined"
                    />
                </div>
            </div>
            <div className="memberTable">
                <MemberTable data={filteredData} />
            </div>
        </div>
    );
};
export default connect(mapStateToProps)(addMember);
