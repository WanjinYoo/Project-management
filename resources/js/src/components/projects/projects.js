import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const mapStateToProps = state => {
    return {
        logIn: state.logIn,
    };
  }
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });



const projects = (props) => {
    const [projects,setProjects] = useState([]);
    const classes = useStyles();
    const [sortby, setSortby] = useState('Sort by');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);

    const handleTabChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChange = (event) => {
        setSortby(event.target.value);
      };

      const handleClose = () => {
        setOpen(false);
      };

      const handleOpen = () => {
        setOpen(true);
      };
    const getData = () => {
        axios.get(`/api/users/projects/${props.logIn.userId}`)
        .then((res) => {
            setProjects(res.data);
        });
    }

   useEffect(() => {
    getData();
   },[])



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
          <MenuItem value="Sort by">
            <em>Sort by</em>
          </MenuItem>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Pending">Pending Projects</MenuItem>
          <MenuItem value="Concluded">Concluded Projects</MenuItem>
        </Select>
    <TableContainer component={Paper}>
        <Tabs
        value={value}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        >
        <Tab label="ALL" />
        <Tab label="Collaborator" />
        <Tab label="Manager" />
        </Tabs>
                 <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>My Projects</StyledTableCell>
                    <StyledTableCell align="right">Status</StyledTableCell>
                    <StyledTableCell align="right">StartDate</StyledTableCell>
                    <StyledTableCell align="right">Deadline</StyledTableCell>
                    <StyledTableCell align="center">Manager</StyledTableCell>
                    <StyledTableCell align="center">View</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {projects.map((row) => (

                    <StyledTableRow key={row.projectName}>
                    <StyledTableCell component="th" scope="row">
                        {row.projectName}
                    </StyledTableCell>
                    <StyledTableCell  align="right">{row.status}</StyledTableCell>
                    <StyledTableCell  align="right">{row.startdate}</StyledTableCell>
                    <StyledTableCell  align="right">{row.deadline}</StyledTableCell>
                    {row.Manager === 1 &&
                        <StyledTableCell  align="center"><CheckIcon /></StyledTableCell>
                    }
                    {row.Manager === 0 &&
                    <StyledTableCell  align="right"></StyledTableCell>
                    }
                     <StyledTableCell  align="left">
                    <Button variant="contained" color="primary" size="small" className = "ml-5">
                     VIEW
                     </Button>
                     </StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}
export default connect(mapStateToProps)(projects);
