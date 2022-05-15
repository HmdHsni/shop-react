import React from "react";
import './Navbar.css';
import Navitems from "../Navitems/Navitems";
const Navbar=(props)=>{
   return(
<header className="Navbar">
    <nav>
       <Navitems/>
    </nav>
</header>
   ) 
}
export default Navbar;