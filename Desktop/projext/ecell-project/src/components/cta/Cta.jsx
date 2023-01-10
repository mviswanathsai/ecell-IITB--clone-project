import React from "react";
import "./Cta.css";
import { FaInstagram, FaTwitter, FaDiscord} from "react-icons/fa"

function Cta(){
    return(
        <div>

        <div className="cta-text">
        <h1>Get in touch</h1>
        <p>Feel free to contact us for queries</p>
        </div>
        

        <div className="input-container">
        <input type="text" className="input-field span-1" placeholder="First Name" autocomplete="off" />
        <input type="text" className="input-field span-1" placeholder="Last Name" autocomplete="off" />
        <input type="text" className="input-field span-1" placeholder="Email" autocomplete="off" />
        <textarea type="text" className="input-field span-2" placeholder="Message" autocomplete="off" />
        <div class="submit span-4"><a>Submit</a></div>

        
        </div> 

        <div className="footer">
        <p>Follow us at</p>
        <div className="socials"> 
        <FaInstagram className="icon"/> 
        <FaTwitter   className="icon"/> 
        <FaDiscord   className="icon"/></div>
        </div>
        </div>
        
    )
}

export default Cta