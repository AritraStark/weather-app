import React from 'react';
import CloudTwoToneIcon from '@material-ui/icons/CloudTwoTone';
import Typography from '@material-ui/core/Typography';
import './about.css';

function About() {
    return (
        <div className="about">

            <Typography variant="h3">This is a weather App</Typography>
            
            <CloudTwoToneIcon fontSize="large"/>
        </div>
    )
}

export default About;
