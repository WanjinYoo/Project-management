import React, { useState } from "react";
import "../componentsstyling/HorizontalNavbar.scss";
import { connect } from 'react-redux';
import  { navbar } from './Navbar'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchBar from "material-ui-search-bar";
import Button from '@material-ui/core/Button';


const mapStateToProps = state => {
    return {
        logIn: state.logIn,
    };
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      logoutUser : () => dispatch({type: "LOG_IN_USER",
      logIn: false,
      userId: null }),
    }
  }



  const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },

  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


const HorizontalNavbar = (props) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
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
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Dashboard
            </Typography>
            <SearchBar/>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Button
            variant="contained"
            color="primary"
            onClick = {() => {
                    props.logoutUser();
                }}
            >LOGOUT</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{navbar}</List>

        </Drawer>
        </React.Fragment>

        // <div className="container-fluid">
        //     <nav className="navbar bg-light navbar-light border-bottom">
        //         <form className="d-inline my-2 my-lg-0 ml-3 nav-input">
        //             <input
        //                 className="nav-form"
        //                 type="search"
        //                 placeholder="Project"
        //                 aria-label="Project"
        //             />
        //             <button
        //                 className="btn btn-outline-dark pt-1 my-2 my-sm-0"
        //                 type="submit"
        //             >
        //                 Search
        //             </button>
        //         </form>
        //         <div>
        //             <button
        //                 className="btn btn-primary rounded-pill new_messages m-2"
        //                 type="button"
        //             >
        //                 Notifications{" "}
        //                 <span className="badge badge-secondary rounded-pill">
        //                     4
        //                 </span>
        //             </button>
        //             <button
        //                 className="btn btn-dark m-2 rounded-pill"
        //                 type="button"
        //                 onClick = {() => {
        //                     props.logoutUser();
        //                 }}
        //             >
        //                 Logout
        //             </button>
        //         </div>
        //     </nav>
        // </div>
    );
}
export default connect(mapStateToProps,mapDispatchToProps)(HorizontalNavbar)
