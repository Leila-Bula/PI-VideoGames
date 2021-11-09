import '../CSS/Landing.css';
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux"
import { getG, getV } from "../actions";

const Landing=function(){
    const history=useHistory();
    const dispatch=useDispatch();
    const [stated,setStated]=useState(false);

    useEffect(()=>{
        var g=dispatch(getG());
        var v=dispatch(getV());
        if(v && g){
            setStated(true)
        }else if(g){
            v=dispatch(getV());
            setStated(true)
        }else if(v){
            v=dispatch(getG());
            setStated(true)
        }else{
            v=dispatch(getV());
            g=dispatch(getG());
            setStated(true)
        }
    },[])

    const handleClic=function(e){
        e.preventDefault()
        if(stated){
            history.push("/home");
        }else{
            alert("Wait a seconds for start");
        }
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