import React from "react";
import "../componentsstyling/HorizontalNavbar.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import clsx from "clsx";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import ReceiptIcon from "@material-ui/icons/Receipt";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import EventNoteIcon from "@material-ui/icons/EventNote";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchBar from "material-ui-search-bar";
import Button from "@material-ui/core/Button";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const mapStateToProps = state => {
    return {
        logIn: state.logIn,
        pageContent: state.pageContent
    };
};
const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () =>
            dispatch({ type: "LOG_IN_USER", logIn: false, userId: null }),
        changeContent: content =>
            dispatch({ type: "GET_CONTENT", content: content })
    };
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    toolbar: {
        paddingRight: 24 // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    menuButtonHidden: {
        display: "none"
    },
    title: {
        flexGrow: 1
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9)
        }
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
    },

    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
    },
    fixedHeight: {
        height: 240
    }
}));

const HorizontalNavbar = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="absolute"
                className={clsx(classes.appBar, open && classes.appBarShift)}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(
                            classes.menuButton,
                            open && classes.menuButtonHidden
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                        {props.pageContent}
                    </Typography>
                    <SearchBar />
                    <IconButton color="inherit">
                        <Badge badgeContent={7} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            props.logoutUser();
                        }}
                    >
                        LOGOUT
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(
                        classes.drawerPaper,
                        !open && classes.drawerPaperClose
                    )
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {/* Horizontal navbar */}
                    <div>
                        <ListItem
                            button
                            component={Link}
                            to="/"
                            onClick={() => {
                                props.changeContent("Dashboard");
                            }}
                        >
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem
                            button
                            component={Link}
                            to="/projects"
                            onClick={() => {
                                props.changeContent("Project");
                            }}
                        >
                            <ListItemIcon>
                                <ChromeReaderModeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Project" />
                        </ListItem>
                        <ListItem
                            button
                            component={Link}
                            to="/tickets"
                            onClick={() => {
                                props.changeContent("Tickets");
                            }}
                        >
                            <ListItemIcon>
                                <ReceiptIcon />
                            </ListItemIcon>
                            <ListItemText primary="Tickets" />
                        </ListItem>
                        <ListItem
                            button
                            component={Link}
                            to="/calendar"
                            onClick={() => {
                                props.changeContent("Calendar");
                            }}
                        >
                            <ListItemIcon>
                                <EventNoteIcon />
                            </ListItemIcon>
                            <ListItemText primary="Calendar" />
                        </ListItem>
                        <ListItem
                            button
                            component={Link}
                            to="/report"
                            onClick={() => {
                                props.changeContent("Report");
                            }}
                        >
                            <ListItemIcon>
                                <LibraryBooksIcon />
                            </ListItemIcon>
                            <ListItemText primary="Report" />
                        </ListItem>
                        <ListItem
                            button
                            component={Link}
                            to="/profile"
                            onClick={() => {
                                props.changeContent("Profile");
                            }}
                        >
                            <ListItemIcon>
                                <AccountBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItem>
                    </div>
                </List>
            </Drawer>
        </React.Fragment>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(HorizontalNavbar);
