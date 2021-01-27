import React from 'react';
import ReportForm from "./reportForm";
import { connect } from "react-redux";
import axios from "axios";

const mapStateToProps = state => {
    return {
        logIn: state.logIn
    };
};


const Settings = props => {
    // const [values, setData] = useState([]);
    // let userID = props.logIn.userId;
    // useEffect(() => {
    //     axios.get(`/api/users/${userID}`).then(res => {
    //         setData(res.data);
    //     });
    // }, []);

    return (
        <p>
            <div>
                <h1>Create Your Report</h1>{" "}
                <h5>Choose the parameters below:</h5>
                <ReportForm />
            </div>
            <div style={{ marginTop: 30 }}>
                <h1>My Reports</h1>{" "}
                <h5>Your Saved Reports:</h5>

            </div>
        </p>
    )
}
export default connect(mapStateToProps)(Settings);
