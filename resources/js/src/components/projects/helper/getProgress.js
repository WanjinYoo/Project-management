import axios from 'axios';

export const getTickets = (project_id) => {
    axios.get(`/api/projects/${project_id}/tickets`)
    .then((res) => {
        const num = getProgress(res.data);
        console.log(num * 100);
        return (num * 100);
    })
}
const getProgress = (data) => {
    let approved = 0;
    for (const item of data) {
        if(item.status_name === 'Approved') {
            approved++;
        }
    }
    return (approved/data.length);
}
