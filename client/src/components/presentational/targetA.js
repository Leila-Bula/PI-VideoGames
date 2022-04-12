import "../../CSS/Cards.css";
import React from "react";

const TargetA=function({info}){
    return (
        <div className="card">
            <img src={info.img} alt={info.name} width="50" /><br/>
            <h4>{info.name}</h4>
            <h5>Genero</h5>
            <span>{info.genres.map((e)=><span> {e.name} </span>)}</span>
        </div>
    )
}

export default TargetA;