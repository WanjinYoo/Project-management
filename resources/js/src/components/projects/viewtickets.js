import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";
import ReceiptIcon from "@material-ui/icons/Receipt";
import axios from 'axios';

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    height:'70%',
    overflow:'scroll',
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ViewTickets(props) {


  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [member, setMmeber] = React.useState(null);

  const getData = () => {

    axios.get(`/api/projects/${props.id}/tickets`)
        .then((res)=> {
            console.log(props.id);
            setMmeber(res.data);
         }
        )}


  const handleOpen = () => {
    getData();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Memebers</h2>
      {member && member.map((item) => {
          return (
        <React.Fragment>
          <p id="simple-modal-description">
            <b>Subject</b> {`: ${item.subject}`} <br />
            <b>Priority Level</b>{`: ${item.priority_name}`} <br />
            <b>Status</b> {`: ${item.status_name}`} <br />
          </p>
          <hr />
        </React.Fragment>
          )
      })}

    </div>
  );

  return (
    <div>
      <Button
      startIcon={<ReceiptIcon />}
      onClick={handleOpen}>
        View Tickets
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