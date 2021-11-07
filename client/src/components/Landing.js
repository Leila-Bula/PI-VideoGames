import '../CSS/Landing.css';
import React, { useEffect } from "react";
import { useHistory } from "react-router";
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
        <div className="landing" >
            <button id="bhome" onClick={handleClic} value="To Home" >
                START
            </button>
        </div>
    )
}

export default Landing;