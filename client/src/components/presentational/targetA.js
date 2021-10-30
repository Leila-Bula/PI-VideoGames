import React from "react";

const TargetA=function({info}){
    return (
        <div>
            <img src={info.img} alt={info.name} width="50" /><br/>
            <span>{info.name}</span><br/>
            <span>Genero</span><br/>
            <span>{info.genres.map((e)=><span> {e.name} </span>)}</span>
        </div>
    )
}

export default TargetA;