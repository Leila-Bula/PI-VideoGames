import "../../CSS/Detailt.css";
import React from "react";

const TargetB=function({game,tipo}){
    if(tipo==="c"){
        var platforms=game.platforms.split(",");
        return (
            <>
                <h1 className="name">{game.name}</h1>
                <span id="id">Id: {game.id}</span><br/>
                <p>{game.description}</p>
                <h3 className="title">Genders</h3>
                {game.genders.map((g)=>(<span className="spand"> {g.name} </span>))}
                <h3 className="title">Platforms</h3>
                {platforms.map((p)=>(<span className="spand"> {p} </span>))}
                <h4 className="detail">Released: </h4><span className="spand">{game.released}</span>
                <h4 className="detail">Rating: </h4><span className="spand">{game.rating} </span>
                <h4 className="detail">Website: </h4><span className="spand">{game.website} </span>
            </>
        )
    }else{
        return (
            <>
                <h1 className="name">{game.name}</h1>
                <span id="id">Id: {game.id}</span><br/>
                <p>{game.description_raw}</p>
                <h3 className="title">Genders</h3>
                {game.genres.map((g)=>(<span className="spand"> {g.name} </span>))}
                <h3 className="title">Platforms</h3>
                {game.platforms.map((p)=>(<span className="spand"> {p.platform.name} </span>))}
                <h4 className="detail">Released: </h4><span className="spand">{game.released}</span>
                <h4 className="detail">Rating: </h4><span className="spand">{game.rating} </span>
                <h4 className="detail">Website: </h4><span className="spand">{game.website} </span>
            </>
        )
    }
}

export default TargetB;