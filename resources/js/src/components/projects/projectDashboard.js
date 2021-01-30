import React, { useState } from "react";
import axios from "axios";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./projectDashboard.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Cards from "./cards";
import Board from "./board";
import Comment from "./commentinput";
import Projectdescription from "./description";
import Viewmembers from "./viewmembers";
import ViewTickets from "./viewtickets";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const getProgress = data => {
    let approved = 0;
    for (const item of data) {
        if (item.status_name === "Approved") {
            approved++;
        }
    }
    return approved / data.length;
};

const mapStateToProps = state => {
    return {
        logIn: state.logIn,
        pageContent: state.pageContent
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeContent: content =>
            dispatch({ type: "GET_CONTENT", content: content })
    };
};

const ProjectDashboard = props => {
    const [project, setProject] = useState([]);
    const [progress, setProgress] = useState(0);
    const [display, setDisplay] = useState('All');
    const [startdate, setStartdate] = useState(null);
    const [deadline, setDeadline] = useState(null);

    const [Edit, setEdit] = useState(null)
    React.useEffect(() => {
        axios.get(`/api/projects/${props.location.aboutProps.id}`).then(res => {
            setProject(res.data);
            setStartdate(res.data.start_date);
            setDeadline(res.data.deadline);
        });
        axios
            .get(`/api/projects/${props.location.aboutProps.id}/tickets`)
            .then(res => {
                const num = getProgress(res.data);
                setProgress(Math.floor(num * 100));
            });
        return () => {
            setProject(null);
            setStartdate(null);
            setDeadline(null);
            setProgress(null);
        }
    }, []);

    return (
        <React.Fragment>
            <div className="d-flex justify-content-around dashboard_header">
                {props.location.aboutProps.isManager === 1 &&
                <h5 className = "mt-1">Status: <b style={{color: "red"}}>{` ${project.status_name}`}</b></h5>
                }
                 {props.location.aboutProps.isManager === 0 &&
                <h5>Status: <b style={{color: "red"}}>{` ${project.status_name}`}</b></h5>
                }

                { display === 'All' &&
                <h5>{`Start Date: ${startdate}`} {props.location.aboutProps.isManager === 1 &&
                <Button
                variant="contained"
                color="secondary"
                onClick = {() => {
                    setDisplay('Startdate');
                }}
                >
                        Edit
                </Button>
                }
                </h5>
                }
                { display === 'Startdate' &&
                <React.Fragment>
                <input
                type="date"
                defaultValue= {project.start_date}
                onChange = {(event) => {
                    setEdit(event.target.value);
                }} >
                </input>
                <Button
                variant="contained"
                color="secondary"
                onClick = {() => {
                    axios.put(`api/projects/${project.id}/start/${props.location.aboutProps.id}`,{
                        start_date: Edit
                    })
                    .then(()=> {
                        alert(`The information has been changed`)
                        setStartdate(Edit);
                        setDisplay('All');
                    })
                }}
                >
                        Submit
                </Button>
                </React.Fragment>
                }

                { display === 'All' &&
                <h5>{`Deadline: ${deadline}`} {props.location.aboutProps.isManager === 1 &&
                <Button
                variant="contained"
                color="secondary"
                onClick = {() => {
                    setDisplay('Deadline')
                }}>
                        Edit
                </Button>
                }
                </h5>
                }
                { display === 'Deadline' &&
                <React.Fragment>
                <input
                type="date"
                defaultValue= {project.deadline}
                onChange = {(event) => {
                    setEdit(event.target.value);
                }} >
                </input>
                <Button
                variant="contained"
                color="secondary"
                onClick = {() => {
                    axios.put(`api/projects/${project.id}/deadline/${props.location.aboutProps.id}`,{
                        deadline: Edit
                    })
                    .then(()=> {
                        alert(`The information has been changed`)
                        setDeadline(Edit);
                        setDisplay('All');
                    })
                }}
                >
                        Submit
                </Button>
                </React.Fragment>
                }


                <div>
                    <GitHubIcon />
                    <a href="https://github.com/WanjinYoo/project-management">{` ${project.github}`}</a>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-4 progressbar">
                    <h5 className="mt-2 text-center">Progress Bar</h5>
                    <ProgressBar animated now={progress} />
                    <p className="mt-0 mb-0 text-center"> {`${progress}%`}</p>
                </div>
                <div className="col-8">
                    <div className="justify-content-around d-flex">
                        <Projectdescription
                            description={project.description}
                            title={project.name}
                        />
                        {/* <OpenInNewIcon /> Project Description */}

                        <h5>
                            <ViewTickets
                                id={project.id}
                                isManager={props.location.aboutProps.isManager}
                            />
                        </h5>

                        <Viewmembers id={project.id} />
                    </div>
                    {props.location.aboutProps.isManager === 1 && (
                        <React.Fragment>
                        <div className="justify-content-between d-flex manager_view">
                            <Button
                            variant="contained"
                            color="secondary"
                            onClick={()=> {
                                axios.put(`api/projects/${props.location.aboutProps.id}/close/${props.logIn.userId}`)
                                .then(()=> {
                                    alert('Project finalized')
                                    setProject((prev) => {
                                        return {
                                            ...prev,
                                            status_name: 'Concluded'
                                        }
                                    })
                                })
                            }}>
                                Finish Project
                            </Button>
                            <Button
                            variant="contained"
                            color="secondary"
                            onClick={()=> {
                                axios.put(`api/projects/${props.location.aboutProps.id}/cancel/${props.logIn.userId}`)
                                .then(()=> {
                                    alert('Project canceled')
                                    setProject((prev) => {
                                        return {
                                            ...prev,
                                            status_name: 'Canceled'
                                        }
                                    })
                                })
                            }}>
                                Cancel Project
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                component={Link}
                                to={{
                                    pathname: "/newticket",
                                    aboutProps: { id: project.id }
                                }}
                                onClick={() => {
                                    props.changeContent("newticket");
                                }}
                            >
                                Create New Ticket
                            </Button>

                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                component={Link}
                                to={{
                                    pathname: "/addmember",
                                    aboutProps: { id: project.id }
                                }}
                                onClick={() => {
                                    props.changeContent("addMember");
                                }}
                            >
                                Add Member
                            </Button>

                        </div>

                        </React.Fragment>
                    )}
                </div>
                <Cards userId = {props.location.aboutProps.id} projectId = {project.id}/>
            </div>
            <h3 className="text-center mt-3"> Bulletin Board</h3>
            <Comment project_id={project.id} />
            <hr />
            <Board project_id={project.id} />
            <hr />
        </React.Fragment>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDashboard);
