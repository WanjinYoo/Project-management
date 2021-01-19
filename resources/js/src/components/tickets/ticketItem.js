import React from 'react'
import { Link } from 'react-router-dom'

export default function TicketItem(props) {
    return (

        <li className="list-group-item container d-flex justify-content-between">
        <p>{`Pull Request Number : ${props.pull_request_number}`} </p>
        <p> {`Deadline : ${props.deadline}`}</p>
        <Link
        className= "btn btn-secondary"
        to = {`/tickets/${props.id}`}>Manage</Link>
        </li>
    )
}
