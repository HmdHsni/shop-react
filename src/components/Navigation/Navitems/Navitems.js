import React from "react";
import Navitem from "../Navitem/Navitem";
import './Navitems.css';
const Navitems=()=>{
    return(
        <ul className="nav-items">
            <Navitem link="/">محصولات</Navitem>
            <Navitem link="/checkout">ورود</Navitem>
        </ul>
    )
}
export default Navitems;