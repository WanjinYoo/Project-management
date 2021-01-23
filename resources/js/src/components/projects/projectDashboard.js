import React, { useState } from 'react'
import axios from 'axios'
import GitHubIcon from '@material-ui/icons/GitHub';
import './projectdashboard.scss';
import ProgressBar from 'react-bootstrap/ProgressBar'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import cards from './cards'
import Board from './board'
export default function ProjectDashboard(props) {
    const [project,setProject] = useState([]);
    axios.get(`/api/projects/${props.location.aboutProps.id}`)
    .then((res) => {
        setProject(res.data)
    })


    return (
    <React.Fragment>
        <div className= "d-flex justify-content-around dashboard_header">
            <h5>{`Start Date: ${project.start_date}`}</h5>
            <h5>{`Deadline: ${project.deadline}`}</h5>
            <div>
            <GitHubIcon />
            <a href = "https://github.com/WanjinYoo/project-management">{` ${project.github}`}</a>
            </div>
        </div>
        <div className = "row mt-4">
        <div className = "col-4 progressbar">
        <h5 className = "mt-2">Progress Bar</h5>
        <ProgressBar animated now={45} />
        </div>
        <div className = "col-8">
        <div className =  "justify-content-around d-flex">
            <h5><OpenInNewIcon /> Dropdown</h5>
            <h5><ReceiptIcon /> ViewTickets</h5>
            <h5><AddCircleIcon />View Memebers</h5>
        </div>
        <div className =  "justify-content-around d-flex manager_view">
            <Button variant="contained" color="secondary">
                Finish Project
            </Button>
            <h5><AddIcon />Create New Ticket</h5>
            <h5><AddIcon />Add Memeber</h5>
        </div>
        </div>
            {cards}
        </div>
        <h3 className = "text-center mt-3"> Bulleting Board</h3>
        <hr />
    </React.Fragment>
    )
}
