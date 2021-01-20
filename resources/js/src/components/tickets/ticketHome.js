import Ticketitem from './ticketItem';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function TicketHome() {

    const [ticket,setTicket] = useState([]);

    useEffect(() => {
        axios.get('/api/tickets')
        .then((res) => {
            setTicket(res.data);
        })
    },[])


    const tickets = ticket.map((item,index) => {
        return (
            <Ticketitem
            key = {index}
            pull_request_number = {item.pull_request_number}
            deadline = {item.deadline}
            id = {item.id}
            />
        );
    })

    return (
        <React.Fragment>
           <Link
           className = "btn btn-secondary"
           to = "/tickets/new"
           > New Ticket+ </Link>
              <hr />
              <ul className="list-group">
                {tickets}
              </ul>
        </React.Fragment>
    )
}
