import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ticketitem from './ticketItem';


export default function Tickets() {

    const [ticket,setTicket] = useState([]);

    useEffect(() => {
        axios.get('/api/tickets')
        .then((res) => {
            setTicket(res.data);
        })
    },[])


    const tickets = ticket.map((item) => {
        return (
            <Ticketitem
            pull_request_number = {item.pull_request_number}
            deadline = {item.deadline}
            id = {item.id}
            />
        );
    })

    return (
    <div className = "container">
        <br />
        <button className = "btn btn-secondary"> New Ticket+ </button>
         <hr />
         <ul className="list-group">
               {tickets}
         </ul>
         </div>
    )
}
