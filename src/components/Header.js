import React from "react";
import './header.css';

function Header(){
    return(
        <div>
           <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">about Us</a>
            </li> <li>
                <a href="/">products</a>
            </li> <li>
                <a href="/">Service</a>
            </li> <li>
                <a href="/">Contactus</a>
            </li>

           </ul>
        </div>
    );
}

export default Header;