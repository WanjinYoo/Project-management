import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import axios from 'axios'
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
  },
}));
const mapStateToProps = state => {
    return {
        logIn: state.logIn
    };
};

const Commentinput = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
         setValue(event.target.value);
    };
    return (
        <div>
              <TextField
                fullWidth
                id="standard-textarea"
                label="Comment"
                placeholder="Comment"
                onChange={handleChange}
                multiline
             />
             <br />
             <br />
             <Button
                 variant="contained"
                 color="primary"
                 onClick = {() => {
                    axios.post(`api/projects/${props.project_id}/comment/${props.logIn.userId}`, {
                        comment: value
                    })
                 }}
                    >
                Submit
            </Button>
        </div>
    )
}
export default connect(mapStateToProps)(Commentinput);
