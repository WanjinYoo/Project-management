import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import ReceiptIcon from "@material-ui/icons/Receipt";
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function ViewTickets(props) {
  return (
    <div>
      <Button
      startIcon={<ReceiptIcon />}
      component={Link}
      to= {{
        pathname: "/projectticket",
        aboutProps: {
            id: props.id,
            isManager: props.isManager
        }
        }}>
        View Tickets
      </Button>
    </div>
  );
}
