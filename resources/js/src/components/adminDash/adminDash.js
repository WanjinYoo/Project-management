import React, { useState, useEffect } from "react";
import "../../componentsstyling/adminDash.scss";
import { Button, TextField } from "@material-ui/core";
import { sizing } from "@material-ui/system";
import Bulletin from "./bulletinTable";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Logo from "./git.png";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch"
        }
    }
}));

export default function adminDash() {
    const classes = useStyles();
    const projectID = 3;
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("/api/projects").then(res => {
            setData(res.data);
        });
    }, []);

    let projectName;
    let startdate;
    let deadline;
    let gitRep;
    if (data[projectID - 1] !== undefined) {
        projectName = data[projectID - 1].name;
        startdate = data[projectID - 1].start_date;
        deadline = data[projectID - 1].deadline;
        gitRep = data[projectID - 1].github;
    }
    return (
        <div>
            <h1>Project {projectName}</h1>
            <div>
                <div className="epicDataStuff">
                    <div className="epicDateStuff">
                        <h3>Start date: {startdate}</h3>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className="ml-5"
                        >
                            update
                        </Button>
                        <h3>Deadline: {deadline}</h3>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className="ml-5"
                        >
                            update
                        </Button>
                    </div>

                    <div id="gitStuff">
                        <img src={Logo} />
                        <a href="https://github.com">GitHub.com/{gitRep}</a>
                    </div>
                </div>

                <div className="bulletinBoard">
                    <h1>Bulletin</h1>
                    <div className="bulletinBoardSend">
                        <TextField
                            id="outlined-full-width"
                            style={{ margin: 8 }}
                            placeholder="Enter Message"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true
                            }}
                            variant="outlined"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className="ml-5"
                        >
                            Send
                        </Button>
                    </div>
                    <Bulletin />
                </div>
            </div>
        </div>
    );
}
