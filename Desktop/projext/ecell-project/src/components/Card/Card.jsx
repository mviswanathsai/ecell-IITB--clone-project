import React from 'react';
import "./Card.css";

function Card(props){
    return(
        <div>
            <div className="card">
            <div className="card-text">{props.text}</div> 
            <div className="card-description">{props.desc}</div>
            </div>
        </div>
    )
}

export default Card;