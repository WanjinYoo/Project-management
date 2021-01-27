import React from 'react'
import axios from 'axios'
export default function Card(props) {
    const [view,setView] =  React.useState('Display');
    const [description,setDescription] =  React.useState('');
    React.useEffect(() => {
        setDescription(props.description);
    }, [props.description])

    return (
        <div className="card border-secondary mb-3 ml-3 mr-3">
            {view === 'Display' &&
            <React.Fragment>
                <div className="card-body text-secondary">
                <h3 className="card-title text-center">Description</h3>
                <p className="card-text text-center">{description}</p>
            </div>
            { props.issuer_id === props.user_id &&
            <button
            className = "btn btn-secondary"
            onClick = {() => {
                setView('Edit')
            }}
            > Update </button>
            }
            </React.Fragment>}
            {view === 'Edit' &&
            <React.Fragment>
                <div className="card-body text-secondary">
                <h3 className="card-title text-center">Description</h3>
                <textarea
                class="form-control"
                id="message"
                name="message"
                rows="5"
                onChange={(event) => {
                    setDescription(event.target.value);
                }}>{description}</textarea>

            </div>
            <button
            className = "btn btn-secondary"
            onClick = {() => {
                axios.put(`api/tickets/${props.ticket_id}/description/${props.user_id}`, {
                    description: description
                })
                .then(()=> {
                    setView('Display')
                })
            }}
            > Save </button>

            </React.Fragment>}
        </div>
    )
}
