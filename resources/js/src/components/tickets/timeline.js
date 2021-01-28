import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from './timelineItem'
import axios from 'axios';


export default function CustomTimeline(props) {
    const [comments,Setcomments] = React.useState(null);
    React.useEffect(()=> {
        axios.get(`/api/tickets/${props.id}/comment`)
        .then((res) => {
            Setcomments(res.data);
        })
    })
  return (
    <Timeline align="alternate">
        {comments && comments.map ((item) => {
            return (
                <TimelineItem comments= {item}/>
            )
        })}
    </Timeline>
  );
}
