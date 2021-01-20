import React, { useState, useEffect } from 'react';
import TicketNew from './ticketNew';
import TicketSpecific from './ticketSpecific';
import TicketHome from './ticketHome';
import { Switch, Route } from "react-router-dom";

export default function Tickets() {


    return (
    <div className = "container">
        <Switch>
              <Route strict = {true} exact = {true} path="/tickets/new" component={TicketNew} />
              <Route path="/tickets/:id" component={TicketSpecific} />
              <Route exact path="/tickets" component={TicketHome} />
        </Switch>
    </div>
    )
}
