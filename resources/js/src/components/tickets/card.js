import React from 'react'

export default function Card(props) {
    return (
        <div className="card border-secondary mb-3 ml-3 mr-3">
            <div className="card-body text-secondary">
                <h3 className="card-title text-center">Description</h3>
                <p className="card-text text-center">{props.description}</p>
            </div>
            { props.issuer_id === props.user_id &&
            <button className = "btn btn-secondary"> Update </button>
            }
        </div>
    )
}
