import React from 'react'
import axios from 'axios'



const cards = (props) => {

    const [overdue,setOverdue] = React.useState(null)
    const [upcoming,setUpcoming] = React.useState(null)
    const [waiting,setWaiting] = React.useState(null)
    axios.get(`/api/users/tickets/${props.userId}/receiver_overdue/${props.projectId}`)
    .then((res)=> {
        setOverdue(res.data.length)
    })
    axios.get(`/api/users/tickets/${props.userId}/receiver_due/${props.projectId}`)
    .then((res)=> {
        setUpcoming(res.data.length)
    })
    axios.get(`/api/users/tickets/${props.userId}/receiver_submitted/${props.projectId}`)
    .then((res)=> {
        setWaiting(res.data.length)
    })

    return (
    <div className = "col-12 d-flex mt-5 justify-content-around">
        <div
        className="card border-primary"
        style = {{width: "20rem", borderWidth: "10px" }}>
            <div className="card-body text-primary">
                <h3 className="card-title text-center"><b>Upcoming Due Tickets</b></h3>
                <h5 className="card-text text-center"><b>{overdue}</b></h5>
            </div>
        </div>
        <div
        className="card border-danger"
        style = {{width: "20rem", borderWidth: "10px"}}>
            <div className="card-body text-danger">
                <h3 className="card-title text-center"><b>Overdue Tickets</b></h3>
                <h5 className="card-text text-center"><b>{upcoming}</b></h5>
            </div>
        </div>
        <div
        className="card border-success"
        style = {{width: "20rem", borderWidth: "10px"}}>
            <div className="card-body text-success">
                <h3 className="card-title text-center"><b>Tickets Waiting For Approval</b></h3>
                <h5 className="card-text text-center"><b>{waiting}</b></h5>
            </div>
        </div>
    </div>
)
    }
export default cards;
