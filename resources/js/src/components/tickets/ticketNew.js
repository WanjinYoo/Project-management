import React from 'react'

export default function ticketNew() {
    return (
        <form action = "/api/tickets" method = "POST">
            <div className="form-group">
                <label Htmlfor="email">Assign it to: </label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="form-group">
                <label Htmlfor="priority_level">Priority Level</label>
                <select className="form-control" id="priority_level">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
            </div>
            <div className="form-group">
                 <label HtmlFor="start_date">Start Date
                 </label>
                 <input class="form-control" type="datetime-local" id="start_date"/>
            </div>
            <div className="form-group">
                 <label Htmlfor="deadline">Deadline
                 </label>
                 <input className="form-control" type="datetime-local" id="deadline"/>
            </div>
            <div className="form-group">
                    <label Htmlfor="pull_request_number">Pull Request Number</label>
                    <input className="form-control" type="number" id="pull_request_number"/>
            </div>
            <div className="form-group">
                <label Htmlfor="description">Description</label>
                <textarea className ="form-control" id="description" rows="3"></textarea>
             </div>
            <button type = "submit" className = "btn btn-secondary">Create</button>
        </form>
    )
}
