import React, { useState } from 'react'
import axios from 'axios'
export default function ProjectDashboard(props) {
    const [project,setProject] = useState([]);
    axios.get(`/api/projects/${props.location.aboutProps.id}`)
    .then((res) => {
        setProject(res.data)
    })
    return (
        <div>
            <h3>Project Name: {project.name}</h3>
            <h5>{project.description}</h5>
            <p>{project.status_name}</p>
            <p>{project.github}</p>

        </div>
    )
}
