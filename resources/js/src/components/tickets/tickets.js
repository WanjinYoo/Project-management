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
            description = {item.description}
            />
        );
    })

    return (
    <ul className="list-group">
        {tickets}
    </ul>
    )
}
