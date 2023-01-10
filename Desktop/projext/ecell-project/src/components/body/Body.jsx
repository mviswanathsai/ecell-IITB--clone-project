import React from "react";
import "./Body.css";
import Initiatives from "../../components/initiatives/Initiatives"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Counter from "../../components/Counter/Counter";
import Cta from "../../components/cta/Cta";
import bg from "../../assets/page1-bg.jpg";

function Body(){

    const [offset, setOffset] = React.useState(0);

    React.useEffect(() => {
        function handleScroll() {
          setOffset(window.pageYOffset);
        }
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [offset]);


    return(
      <div class="body-container">
        <div className="page one">
        <div className="laptop" style={{transform: `translateY(${offset * 0.75}px)`}}></div>
        
        <h1 className="heading" style={{transform: `translateY(-${offset * 0.75}px)`}}>THE ENTREPRENEURSHIP CELL IIT BOMBAY
        <p style={{transform: `translateY(-${offset * 1}px)`}}>“ CREATING JOB CREATORS ”</p></h1>

        </div>
        <div className="page two" >
        
         <div className="ini-container"><Initiatives /></div>

        </div>

        <div className="page three">

        <Counter />
        </div>

        <div className="page four">
          <Cta />
        </div>

        
        </div>
        
        
    )
}

export default Body;