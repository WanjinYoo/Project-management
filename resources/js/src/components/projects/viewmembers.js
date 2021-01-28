import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";
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
        height: "70%",
        overflow: "scroll",
        padding: theme.spacing(2, 4, 3)
    }
}));

export default function Viewmembers(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [member, setMmeber] = React.useState(null);

    const getData = () => {
        axios.get(`/api/projects/${props.id}/member`).then(res => {
            setMmeber(res.data);
        });
    };

    const handleOpen = () => {
        getData();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Members</h2>
            {member &&
                member.map(item => {
                    return (
                        <React.Fragment>
                            <p id="simple-modal-description">
                                <b>Name</b>{" "}
                                {` ${item.first_name} ${item.last_name}`} <br />
                                <b>Team</b> {` ${item.team}`} <br />
                                <b>Position</b> {` ${item.position}`} <br />
                                <b>Email</b> {` ${item.email}`} <br />
                                <b>Telephone no.</b> {` ${item.telephone}`}{" "}
                                <br />
                                <b>Slack Account</b> {` ${item.slack_account}`}
                            </p>
                            <button
                                className="btn btn-secondary"
                                onClick={() => {
                                    axios
                                        .delete(
                                            `api/projects/${props.id}/member/${item.id}`
                                        )
                                        .then(() => {
                                            alert(
                                                "The user has been removed from the project"
                                            );
                                        });
                                }}
                            >
                                {" "}
                                Remove Member
                            </button>
                            <hr />
                        </React.Fragment>
                    );
                })}
        </div>
    );

    return (
        <div>
            <Button startIcon={<AddCircleIcon />} onClick={handleOpen}>
                View Members
            </Button>
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
