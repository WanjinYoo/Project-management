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
    <div className = "d-flex mt-5 justify-content-around">
        <div className="card border-primary mb-3 ml-3 mr-3">
            <div className="card-body text-primary">
                <h3 className="card-title text-center">Upcoming Due Tickets</h3>
                <h5 className="card-text text-center">{overdue}</h5>
            </div>
        </div>
        <div className="card border-danger mb-3 ml-3 mr-3">
            <div className="card-body text-danger   ">
                <h3 className="card-title text-center">Overdue Tickets</h3>
                <h5 className="card-text text-center">{upcoming}</h5>
            </div>
        </div>
        <div className="card border-success mb-3 ml-3 mr-3">
            <div className="card-body text-success">
                <h3 className="card-title text-center">Tickets Waiting For Approval</h3>
                <h5 className="card-text text-center">{waiting}</h5>
            </div>
        </div>
    </div>
)
    }
export default cards;
