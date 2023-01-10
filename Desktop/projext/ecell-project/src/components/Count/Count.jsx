import React from "react";
import "./Count.css";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function Count(props){

      
    return(
        <div className="count-container">
          <p className="block"><CountUp className="inline" start={0} end={props.count} duration={6} /> +</p>
          <p className="name">{props.name}</p>
        </div>
    )
}

export default Count;