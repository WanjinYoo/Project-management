import React from 'react'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Ticketitem from './ticketItem';
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
            <StyledTableCell>Projects</StyledTableCell>
            <StyledTableCell align="center">Subject</StyledTableCell>
            <StyledTableCell align="center">Priority</StyledTableCell>
            <StyledTableCell align="center">Start Date</StyledTableCell>
            <StyledTableCell align="center">Deadline</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="right">View</StyledTableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {props.tickets.map((row,index) => {
            if (props.sort === "All") {
            return (
            <Ticketitem
                    key = {index}
                    id = {row.id}
                    subject = {row.subject}
                    name = {row.project_name}
                    status_name = {row.status_name}
                    start_date = {row.start_at}
                    deadline = {row.deadline}
                    priority_name = {row.priority_name}
            />
            )
            }
            else if (props.sort === 'Pending' && row.status_name === 'Pending') {
                return (
                    <Ticketitem
                            key = {index}
                            id = {row.id}
                            subject = {row.subject}
                            name = {row.project_name}
                            status_name = {row.status_name}
                            start_date = {row.start_at}
                            deadline = {row.deadline}
                            priority_name = {row.priority_name}
                    />
                    )
            }
            else if (props.sort === 'Submitted' && row.status_name === 'Submitted') {
                return (
                    <Ticketitem
                            key = {index}
                            id = {row.id}
                            subject = {row.subject}
                            name = {row.project_name}
                            status_name = {row.status_name}
                            start_date = {row.start_at}
                            deadline = {row.deadline}
                            priority_name = {row.priority_name}
                    />
                    )
            }
            else if (props.sort === 'Rejected' && row.status_name === 'Rejected') {
                return (
                    <Ticketitem
                            key = {index}
                            id = {row.id}
                            subject = {row.subject}
                            name = {row.project_name}
                            status_name = {row.status_name}
                            start_date = {row.start_at}
                            deadline = {row.deadline}
                            priority_name = {row.priority_name}
                    />
                    )
            }
            else if (props.sort === 'Approved' && row.status_name === 'Approved') {
                return (
                    <Ticketitem
                            key = {index}
                            id = {row.id}
                            subject = {row.subject}
                            name = {row.project_name}
                            status_name = {row.status_name}
                            start_date = {row.start_at}
                            deadline = {row.deadline}
                            priority_name = {row.priority_name}
                    />
                    )
            }
         }
        )}
        </TableBody>
        </Table>
    )
}

