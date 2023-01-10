import React from "react";
import "./Initiatives.css";
import Card from "../../components/Card/Card"

function Initiatives(){
    return(
        <div>
        <div className="t-initiatives">

        <h1 className="h-initiatives">Our Initiatives</h1>
        <p className="p-initiatives">We at E-Cell, IIT Bombay believe that entrepreneurship is the key to India’s development. 
        To fulfill this vision, we have conceptualized & successfully implemented various initiatives to help students, young entrepreneurs & professionals in their entrepreneurial journey.</p>

        </div>
        <div className="card-holder">
            <Card text="S" desc="We are indias first so on so and we blah blah blah lmaoo"/>
            <Card text="E" desc="We are indias first so on so and we blah blah blah lmaoo"/>
            <Card text="N" desc="We are indias first so on so and we blah blah blah lmaoo"/>
            <Card text="K" desc="We are indias first so on so and we blah blah blah lmaoo"/>
            <Card text="T" desc="We are indias first so on so and we blah blah blah lmaoo"/>
            <Card text="A" desc="We are indias first so on so and we blah blah blah lmaoo"/>
            <Card text="B" desc="We are indias first so on so and we blah blah blah lmaoo"/>
            <Card text="E" desc="We are indias first so on so and we blah blah blah lmaoo"/>
            <Card text="D" desc="We are indias first so on so and we blah blah blah lmaoo"/>
        </div>
        </div>
    )
}

export default Initiatives;