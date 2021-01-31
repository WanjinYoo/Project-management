import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { connect } from "react-redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    tablecell: {
        fontWeight: "bold"
    }
});
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

const BasicTable = props => {
    const [state, setState] = useState({ checked: false });
    const handleChange = event => {
        setState({ ...state, checked: event.target.checked });
    };
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tablecell}>
                            Email
                        </TableCell>
                        <TableCell className={classes.tablecell}>
                            First Name
                        </TableCell>
                        <TableCell className={classes.tablecell}>
                            Last Name
                        </TableCell>

                        <TableCell className={classes.tablecell}>
                            Add as Manager?
                        </TableCell>
                        <TableCell className={classes.tablecell}>
                            Add Member
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.first_name} </TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={handleChange}
                                            name="checked"
                                            color="primary"
                                        />
                                    }
                                    label="Manager"
                                />
                            </TableCell>{" "}
                            <TableCell>
                                {" "}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    component={Link}
                                    to={{
                                        pathname: "/projectdashboard",
                                        aboutProps: {
                                            id: props.id,
                                            isManager: 1
                                        }
                                    }}
                                    onClick={() => {
                                        axios
                                            .post(
                                                `/api/projects/${props.id}/member`,
                                                {
                                                    email: row.email,
                                                    isManager: state.checked
                                                }
                                            )
                                            .then(alert("Successfully Added!"));
                                        props.changeContent("projectdashboard");
                                    }}
                                    className="ml-5"
                                >
                                    ADD
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(BasicTable);
