import React from "react";
import ecell from "../../assets/logo.png";
import sine from "../../assets/SINE-Logo.png";
import "./Navbar.css";

function Navbar(){

    const [isToggled, setIsToggled] = React.useState(false);
    function handleClick(){
       setIsToggled(!isToggled);
       console.log(isToggled);
    }

    return(
        <div className="container">
            <img src={ecell} className="logo" alt="ecell-logo"></img>
            <div className="nav-list" toggled= {isToggled ? "toggled" : "notToggled"}>
                <a className="nav-item active" href="#">Home</a>
                <a className="nav-item" href="#">Home</a>
                <a className="nav-item" href="#">About</a>
                <a className="nav-item" href="#">Initiatives <div className="sub-nav-item"><a>blah</a> <a>blah</a></div></a>
                <a className="nav-item" href="#">Archives <div className="sub-nav-item"><a>blah</a> <a>blah</a></div></a>
                <a className="nav-item" href="#">What we do <div className="sub-nav-item"><a>blah</a> <a>blah</a></div></a>
                <a className="nav-item" href="#">Partners <div className="sub-nav-item"><a>blah</a> <a>blah</a></div></a>
                <a className="nav-item" href="#">Team</a>
            </div>
            <span onClick={handleClick}> X </span>
            <img src={sine} className="sine logo" alt="sine-logo"></img>
        </div>
    )
}


export default Navbar;