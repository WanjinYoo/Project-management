import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper
    }
}));

const options = ["Low", "Medium", "High", "Urgent"];
const ProfileForm = props => {
    const [values, setData] = useState({});
    const [uvalues, setuData] = useState([]);
    let userID = props.logIn.userId;
    let ID = props.Pid;
    useEffect(() => {
        axios.get(`/api/projects/${ID}`).then(res => {
            setuData(res.data),
                setData({
                    project_name: res.data.name,
                    status: 1,
                    priority: 2
                });
        });
    }, []);

    const onUpdate = () => {
        console.log(values);
        alert("Ticket Created!"), props.changeContent("projectdashboard");
        // console.log(values);
        // axios.put(`/api/users/${userID}`, values).then(res => console.log(res));
    };
    const handleInputChange = e => {
        const { name, value } = e.target;
        setData({ ...values, [name]: value });
    };
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [Dvalue, setDValue] = React.useState(null);
    const handleClickListItem = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setData({ ...values, priority: index + 1 });
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <div>
                <div className={classes.root}>
                    <List component="nav" aria-label="Device settings">
                        <ListItem
                            button
                            aria-haspopup="true"
                            aria-controls="lock-menu"
                            aria-label="when device is locked"
                            onClick={handleClickListItem}
                        >
                            <ListItemText
                                primary="Select Priority Level"
                                secondary={options[selectedIndex]}
                            />
                        </ListItem>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {options.map((option, index) => (
                            <MenuItem
                                key={option}
                                selected={index === selectedIndex}
                                onClick={event =>
                                    handleMenuItemClick(event, index)
                                }
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <TextField
                    label="Project Name"
                    style={{ margin: 8 }}
                    value={values.project_name}
                    name="project_name"
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
                    name="issuer_email"
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
                    value={values.receiver_email}
                    fullWidth
                    onChange={handleInputChange}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />

                <TextField
                    label="Subject"
                    style={{ margin: 8 }}
                    name="subject"
                    value={values.subject}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    label="Description"
                    style={{ margin: 8 }}
                    value={values.description}
                    name="description"
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
                    value={values.start_at}
                    onChange={handleInputChange}
                    name="start_at"
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
