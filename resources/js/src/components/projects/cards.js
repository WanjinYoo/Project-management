import React from 'react'

const cards = (
    <div class = "d-flex mt-5 justify-content-around">
        <div class="card border-primary mb-3 ml-3 mr-3">
            <div class="card-body text-primary">
                <h3 class="card-title text-center">Upcoming Due Tickets</h3>
                <h5 class="card-text text-center">5</h5>
            </div>
        </div>
        <div class="card border-secondary mb-3 ml-3 mr-3">
            <div class="card-body text-secondary">
                <h3 class="card-title text-center">Overdue Tickets</h3>
                <h5 class="card-text text-center">3</h5>
            </div>
        </div>
        <div class="card border-success mb-3 ml-3 mr-3">
            <div class="card-body text-success">
                <h3 class="card-title text-center">Tickets Waiting For Approval</h3>
                <h5 class="card-text text-center">3</h5>
            </div>
        </div>
    </div>
)
export default cards;
