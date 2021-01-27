import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import TicketsTable from "./ticketstable";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}


const mapStateToProps = state => {
    return {
        logIn: state.logIn
    };
};

const Tickets = props => {
    const [tickets, setTickets] = useState([]);
    const [issuedtickets, setIssuedTickets] = useState([]);
    const [sortby, setSortby] = useState("All");
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);

    const handleChange = event => {
        setSortby(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    const getData = () => {
        axios.get(`/api/users/tickets/${props.logIn.userId}`).then(res => {
            setTickets(res.data);
        });
        axios.get(`/api/users/tickets/${props.logIn.userId}/issuer`).then(res => {
            setIssuedTickets(res.data);
        });
    };
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            getData();
        }
        return () => {
            isMounted = false;
            setTickets([]);
        };
    }, []);

    return (
        <div>
            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={sortby}
                onChange={handleChange}
            >
                <MenuItem value="All">
                    <em>All</em>
                </MenuItem>
                <MenuItem value="Pending">Pending Tickets</MenuItem>
                <MenuItem value="Submitted">Submitted Tickets</MenuItem>
                <MenuItem value="Rejected">Rejected Tickets</MenuItem>
                <MenuItem value="Approved">Approved Tickets</MenuItem>
            </Select>
            <TableContainer component={Paper}>
                    <Tabs
                    value={value}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Issued Tickets" {...a11yProps(0)} />
                    <Tab label="Received Tickets" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <TicketsTable
                        tickets={issuedtickets}
                        sort={sortby}
                    />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TicketsTable
                        tickets={tickets}
                        sort={sortby}
                    />
                </TabPanel>
            </TableContainer>
        </div>
    );
};
export default connect(mapStateToProps)(Tickets);
