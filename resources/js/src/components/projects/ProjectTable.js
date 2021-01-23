import React from 'react'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Projectlist from './projectlist';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { withStyles, makeStyles } from '@material-ui/core/styles';



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

export default function ProjectTable(props) {
    const classes = useStyles();

    return (
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
        {props.projects.map((row,index) => {
            //Conditional rendering by sort
            if (props.sort === "all") {
                if (props.sort2 === "All"){
                        return (
                    <Projectlist
                    key = {index}
                    id = {row.project_id}
                    name = {row.name}
                    status_name = {row.status_name}
                    start_date = {row.start_date}
                    deadline = {row.deadline}
                    isManager = {row.isManager}
                    />
                    )
                }
                else if (props.sort2 === "Pending" && row.status_name === "Pending")  {
                    return (
                        <Projectlist
                        key = {index}
                        name = {row.name}
                        id = {row.project_id}
                        status_name = {row.status_name}
                        start_date = {row.start_date}
                        deadline = {row.deadline}
                        isManager = {row.isManager}
                        />
                        )
                }
                else if (props.sort2 === "Concluded" && row.status_name === "Concluded")  {
                    return (
                        <Projectlist
                        key = {index}
                        name = {row.name}
                        id = {row.project_id}
                        status_name = {row.status_name}
                        start_date = {row.start_date}
                        deadline = {row.deadline}
                        isManager = {row.isManager}
                        />
                        )
                }
            }
            else if (props.sort === "collaborator" && row.isManager === 0) {
                if (props.sort2 === "All"){
                    return (
                <Projectlist
                key = {index}
                name = {row.name}
                id = {row.project_id}
                status_name = {row.status_name}
                start_date = {row.start_date}
                deadline = {row.deadline}
                isManager = {row.isManager}
                />
                )
            }
            else if (props.sort2 === "Pending" && row.status_name === "Pending")  {
                return (
                    <Projectlist
                    key = {index}
                    name = {row.name}
                    id = {row.project_id}
                    status_name = {row.status_name}
                    start_date = {row.start_date}
                    deadline = {row.deadline}
                    isManager = {row.isManager}
                    />
                    )
            }
            else if (props.sort2 === "Concluded" && row.status_name === "Concluded")  {
                return (
                    <Projectlist
                    key = {index}
                    name = {row.name}
                    id = {row.project_id}
                    status_name = {row.status_name}
                    start_date = {row.start_date}
                    deadline = {row.deadline}
                    isManager = {row.isManager}
                    />
                    )
                 }
            }
            else if (props.sort === "manager" && row.isManager === 1) {
                if (props.sort2 === "All"){
                    return (
                <Projectlist
                key = {index}
                name = {row.name}
                id = {row.project_id}
                status_name = {row.status_name}
                start_date = {row.start_date}
                deadline = {row.deadline}
                isManager = {row.isManager}
                />
                )
            }
            else if (props.sort2 === "Pending" && row.status_name === "Pending")  {
                return (
                    <Projectlist
                    key = {index}
                    name = {row.name}
                    id = {row.project_id}
                    status_name = {row.status_name}
                    start_date = {row.start_date}
                    deadline = {row.deadline}
                    isManager = {row.isManager}
                    />
                    )
            }
            else if (props.sort2 === "Concluded" && row.status_name === "Concluded")  {
                return (
                    <Projectlist
                    key = {index}
                    name = {row.name}
                    id = {row.project_id}
                    status_name = {row.status_name}
                    start_date = {row.start_date}
                    deadline = {row.deadline}
                    isManager = {row.isManager}
                    />
                    )
            }
        }
        }
        )}
        </TableBody>
        </Table>
    )
}

