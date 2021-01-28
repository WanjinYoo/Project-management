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
        height: "40%",
        overflow: "scroll",
        padding: theme.spacing(2, 4, 3)
    }
}));

export default function Confirmation(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Reason for rejection</h2>
            <textarea
                class="form-control"
                id="message"
                name="message"
                rows="5"
                onChange={(event) => {
                    setMessage(event.target.value);
                }}></textarea>
                <hr />
            <button
            className = "btn btn-secondary"
              onClick = {() => {
                        axios.put(`api/tickets/${props.ticket_id}/reject/${props.user_id}`, {
                            comment: message
                        })
                        .then(() => {
                            alert('This ticket has been rejected');
                            props.setTickets((prev) => {
                                return {
                                    ...prev,
                                    status_name: "Rejected"
                                }
                            })
                            setOpen(false);
                        })
                    }}
            > Submit </button>
            <button
            className = "btn btn-secondary ml-2"
            onClick = {handleClose}> Back </button>
        </div>
    );

    return (
        <div>
             <button
                    className = "btn btn-secondary"
                    onClick = {handleOpen}
                    // onClick = {() => {
                    //     axios.put(`api/tickets/${props.ticket_id}/reject/${props.user_id}`)
                    //     .then(() => {
                    //         alert('This ticket has been rejected');
                    //         props.setTickets((prev) => {
                    //             return {
                    //                 ...prev,
                    //                 status_name: "Rejected"
                    //             }
                    //         })
                    //     })
                    // }}
            > Reject Ticket</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
