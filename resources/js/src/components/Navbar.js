import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import ReceiptIcon from "@material-ui/icons/Receipt";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import EventNoteIcon from "@material-ui/icons/EventNote";

export const navbar = (
    <div>
        <ListItem button component={Link} to="/">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/projects">
            <ListItemIcon>
                <ChromeReaderModeIcon />
            </ListItemIcon>
            <ListItemText primary="Project" />
        </ListItem>
        <ListItem button component={Link} to="/tickets">
            <ListItemIcon>
                <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Tickets" />
        </ListItem>
        <ListItem button component={Link} to="/calander">
            <ListItemIcon>
                <EventNoteIcon />
            </ListItemIcon>
            <ListItemText primary="Calender" />
        </ListItem>
        <ListItem button component={Link} to="/report">
            <ListItemIcon>
                <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Report" />
        </ListItem>
    </div>

    // <Fragment>
    //     <div className="col-3 pr-0">
    //         <div
    //             className="nav flex-column nav-pills bg-dark"
    //             id="v-pills-tab"
    //             role="tablist"
    //             aria-orientation="vertical"
    //         >
    //             <br />
    //             <h3 className="ml-2">Project Management</h3>
    //             <br />
    //             <NavbarItems name="Dashboard" to="/" />
    //             <NavbarItems name="Tickets" to="/tickets" />
    //             <NavbarItems name="Calendar" to="/calendar" />
    //             <NavbarItems name="Progress" to="/progress" />
    //             <NavbarItems name="Settings" to="/settings" />
    //         </div>
    //     </div>
    // </Fragment>
);
