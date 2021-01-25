import React from 'react'

const cards = (
    <div className = "d-flex mt-5 justify-content-around">
        <div className="card border-primary mb-3 ml-3 mr-3">
            <div className="card-body text-primary">
                <h3 className="card-title text-center">Upcoming Due Tickets</h3>
                <h5 className="card-text text-center">5</h5>
            </div>
        </div>
        <div className="card border-danger mb-3 ml-3 mr-3">
            <div className="card-body text-danger   ">
                <h3 className="card-title text-center">Overdue Tickets</h3>
                <h5 className="card-text text-center">3</h5>
            </div>
        </div>
        <div className="card border-success mb-3 ml-3 mr-3">
            <div className="card-body text-success">
                <h3 className="card-title text-center">Tickets Waiting For Approval</h3>
                <h5 className="card-text text-center">3</h5>
            </div>
        </div>
    </div>
)
export default cards;
