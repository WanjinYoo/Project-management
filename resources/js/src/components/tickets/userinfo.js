import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import axios from "axios";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        overflow: "scroll",
        padding: theme.spacing(2, 4, 3)
    }
}));

export default function Userinfo(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [member, setMmeber] = React.useState(null);


        axios.get(`/api/users/${props.id}`)
        .then(res => {
            setMmeber(res.data);
        });


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (


        <div style={modalStyle} className={classes.paper}>
            { member &&
            <React.Fragment>
            <p><b>{`${member.first_name} ${member.last_name}`}</b></p>
            <p><b>Position:</b>{` ${member.position}`}</p>
            <p><b>Slack:</b>{` ${member.slack_account}`}</p>
            <p><b>Telephone:</b>{` ${member.telephone}`}</p>
            <p><b>Team: </b>{` ${member.team}`}</p>
            </React.Fragment>
            }
        </div>
    );

    return (

        <div>
             { member &&
            <React.Fragment>
                { props.assign === false &&
                <h5
            onClick = {handleOpen}
            style = {{cursor:"pointer"}}>
                <b>Issuer Name: </b> {` ${member.first_name} ${member.last_name}`}</h5>
                }
                  { props.assign === true &&
                <h5
            onClick = {handleOpen}
            style = {{cursor:"pointer"}}>
                <b>Assigned to: </b> {` ${member.first_name} ${member.last_name}`}</h5>
                }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            </React.Fragment>
            }
        </div>

    );
}
