import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Boton from "./presentational/boton";
import videogame from "../img/videogames.gif";
import { useDispatch } from "react-redux"
import { getG, getV } from "../actions";

const Landing=function(){
    const history=useHistory();
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getG());
        dispatch(getV());
    },[])

    const handleClic=function(e){
        e.preventDefault()
        history.push("/home");
    }
    return (
        <div>
            <img src={videogame} />
            <Boton clic={handleClic} text="To Home" />
        </div>
    )
}

export default Landing;