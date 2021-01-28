import React, { useState } from "react";
import axios from 'axios'
import Cards from './card'
import Timeline from './timeline'
import { connect } from "react-redux";
import Reassign from "./reassign";
import Confirmation from "./confirmation"


const mapStateToProps = state => {
    return {
        logIn: state.logIn
    };
};

const TicketSpecific = (props) => {
    const [Tickets, setTickets] = useState([]);
    const [comment, setComment] = useState('');
    React.useEffect(()=> {
        axios.get(`/api/tickets/${props.location.aboutProps.id}`).then(res => {
            setTickets(res.data);
        });
    },[])
    return (
    <React.Fragment>
        <div className = "d-flex justify-content-around">
            <h5>Priority:{` ${Tickets.priority_name}`}</h5>
            <h5>StartDate:{` ${Tickets.start_at}`}</h5>
            <h5>Deadline:{` ${Tickets.deadline}`}</h5>
        </div>
        <h2><b>{` ${Tickets.subject}`}</b></h2>
        <hr className = "mb-0"/>
        <div className = "row">
            <div className = "col-4 border-right">
                <br />
                <h5><b>Issuer Name: </b> {` ${Tickets.issuer_firstname} ${Tickets.issuer_lastname}`}</h5>
                <h5><b>Assigned to: </b> {` ${Tickets.receiver_firstname} ${Tickets.receiver_lastname}`}</h5>
                <h5><b>Status: </b> {` ${Tickets.status_name}`}</h5>
                <br />
                { Tickets.status_name ==='Pending' &&
                <div class="input-group d-flex justify-content-center">
                <input type="text" placeholder="Pull Request Number" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Submit</button>
                </div>
                </div>
                }
                 { Tickets.issuer_id === props.logIn.userId &&
                 <React.Fragment>
                <hr />
                <div className = "d-flex justify-content-around">
                    <button
                    className = "btn btn-secondary"
                    onClick = {() => {
                        axios.put(`api/tickets/${Tickets.id}/approve/${props.logIn.userId}`)
                        .then(() => {
                            alert('This ticket has been approved');
                            setTickets((prev) => {
                                return {
                                    ...prev,
                                    status_name: "Approved"
                                }
                            })
                        })
                    }}> Approve Ticket</button>
                    <Confirmation setTickets = {setTickets} ticket_id = {Tickets.id} user_id = {props.logIn.userId}/>
                </div>
                </React.Fragment>
                }
            </div>
            <div className = "col-8">
                <br />
                <Cards
                description = {Tickets.description}
                issuer_id = {Tickets.issuer_id}
                user_id = {props.logIn.userId}
                ticket_id = {Tickets.id}
                key = {Tickets.id}
                />
                { Tickets.issuer_id === props.logIn.userId &&
                <div className = "d-flex justify-content-around">

                    <Reassign id = {Tickets.project_id} ticket_id = {Tickets.id} setTickets = {setTickets}/>
                    <button
                    className = "btn btn-outline-secondary"
                    onClick = {() => {
                        axios.put(`api/tickets/${Tickets.id}/cancel/${props.logIn.userId}`)
                        .then(() => {
                            alert('This ticket has been Cancelled');
                            setTickets((prev) => {
                                return {
                                    ...prev,
                                    status_name: "Cancelled"
                                }
                            })
                        })
                    }}
                    > Cancel Ticket</button>
                </div>
                }
                <br />
            </div>
        </div>
        <hr className = "mt-0"/>
        <div class="input-group d-flex justify-content-center">
            <input
            className="form-control"
            type="text"
            placeholder="Comments"
            onChange = {(event)=>  {
                setComment(event.target.value)
            }}/>
            <div className="input-group-append">
                <button
                className="btn btn-outline-secondary"
                type="button"
                onClick = {()=> {
                    axios.post(`/api/tickets/${props.location.aboutProps.id}/comment/${props.logIn.userId}`, {
                        comment: comment
                    }
                    ).then(()=> {
                        alert('comment saved')
                    })
                }}>Submit</button>
            </div>
        </div>
        <Timeline id = {props.location.aboutProps.id}/>
    </React.Fragment>
    )
}
export default connect(mapStateToProps)(TicketSpecific);
