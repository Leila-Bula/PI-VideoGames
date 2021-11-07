import "../CSS/Detailt.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { videogame } from "../actions";
import { store } from "../store"
import TargetB from "./presentational/targetB";

const Detail=function({props}){
    const id=props.match.params.id;
    const dispatch=useDispatch();
    const [landing,setLanding]=useState(false);
    var game={};

    useEffect((r)=>{
        dispatch(videogame(id));
        setTimeout((r)=>{setLanding(true)},5000)
    },[]);

    if(landing){
        game=store.getState().detailt[0];
        console.log(game)
        if(isNaN(game.id)){
            return (
                <div className="detailt" >
                    <div>
                        <TargetB game={game} tipo="c" />
                    </div>
                    <img src={game.background_image} alt={game.name} width="50" />
                </div>
            )
        }else{
            return (
                <div className="detailt" >
                    <div>
                        <TargetB game={game} tipo="e" />
                    </div>
                    <img src={game.img} alt={game.name} width="50" />
                </div>
            )
        }
    }else{
        return (
            <div className="detailt">
                CARGANDO
            </div>
        )
    }
}

export default Detail;