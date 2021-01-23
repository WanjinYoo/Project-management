import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        pageContent: state.pageContent,
    };
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      changeContent: (content) => dispatch({type: "GET_CONTENT", content: content}),
    }
  }


const Projectlist = (props) => {

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
    return (

        <StyledTableRow key={props.name}>
        <StyledTableCell component="th" scope="row">
            {props.name}
        </StyledTableCell>
        <StyledTableCell  align="right">{props.status_name}</StyledTableCell>
        <StyledTableCell  align="right">{props.start_date}</StyledTableCell>
        <StyledTableCell  align="right">{props.deadline}</StyledTableCell>
        {props.isManager === 1 &&
            <StyledTableCell  align="center"><CheckIcon /></StyledTableCell>
        }
        {props.isManager === 0 &&
        <StyledTableCell  align="right"></StyledTableCell>
        }
         <StyledTableCell  align="left">
        <Button
        variant="contained"
        color="primary"
        size="small"
        component={Link}
        to= {{
            pathname: "/projectdashboard",
            aboutProps: {
                id: props.id
            }
            }}
        onClick = {() => {
            props.changeContent(`${props.name}`);
        }}
        className = "ml-5"
        >
         VIEW
         </Button>
         </StyledTableCell>
        </StyledTableRow>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(Projectlist)
