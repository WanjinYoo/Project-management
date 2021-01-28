import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import axios from 'axios'
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {
        logIn: state.logIn
    };
};

const Commentinput = (props) => {
    const [value, setValue] = React.useState('');
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
                value = {value}
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
                    .then(()=> {
                        alert('comment saved')
                        setValue('');
                    })
                 }}
                    >
                Submit
            </Button>
        </div>
    )
}
export default connect(mapStateToProps)(Commentinput);
