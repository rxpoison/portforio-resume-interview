import React from "react";
import { Row, Col, Label } from 'reactstrap';
import { Camera } from 'react-feather'
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
function WorkHistory(data) {
  const works = data.data
  const classes = useStyles();

  const TimelineWork = () => {
    return (
      <Timeline align="alternate">
        {works.map((work, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography className="mt-2" variant="body2" color="textSecondary">
                {work.exp}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              {work.timelineConnector ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent className="text-left">
              <Paper elevation={3} className={classes.paper}>
                <div className="w-100">
                  <h6 className="mb-0">{work.company}</h6>
                  <h6 className="mb-0" style={{fontWeight:400}}>
                    {work.position}
                  </h6>
                </div>
                <hr className="my-1"/>
                <h6 className="mb-0">Tech</h6>
                <ul className="text-left" style={{listStyleType:"square"}}>
                {work.tech.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
                </ul>
                <h6 className="mb-0">Job duty</h6>
                <ul className="text-left text-th" style={{listStyleType:"square"}}>
                  {work.role.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        )
      )}
      </Timeline>
    )
  }
  
  return (
   <TimelineWork />
  )
}

export default WorkHistory;
