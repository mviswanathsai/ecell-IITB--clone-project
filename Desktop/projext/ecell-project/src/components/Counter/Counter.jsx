import React from "react";
import "./Counter.css";
import Count from "../../components/Count/Count";

function Counter(){
    return(
        <div className="count-holder">
        <Count name="Projects" count="999" />
        <Count name="Cities" count="35"/>
        <Count name="Students" count="6996"/>

        </div>
    )
}

export default Counter;