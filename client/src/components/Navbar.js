import "../CSS/Navbar.css";
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

const Navbar=function(){
    const path=useLocation().pathname;
    if(path!=="/"){
        return (
        <div className="navbar" >
            <NavLink to="/home" > Home </NavLink>
            <NavLink to="/create" > Create Videogame </NavLink>
        </div>
        )
    }else{
        return(<div></div>)
    }
}

export default Navbar;