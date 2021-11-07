import React from "react";

const TargetB=function({game,tipo}){
    if(tipo==="c"){
        var platforms=game.platforms.split(",");
        return (
            <>
                <h1>{game.name}</h1>
                <span>Id: {game.id}</span><br/>
                <p>{game.description}</p>
                <h3>Genders</h3>
                {game.genders.map((g)=>(<span> {g.name} </span>))}
                <h3>Platforms</h3>
                {platforms.map((p)=>(<span> {p} </span>))}
                <h4>Released: {game.released} </h4>
                <h4>Rating: {game.rating} </h4>
                <h4>Website: {game.website} </h4>
            </>
        )
    }else{
        return (
            <>
                <h1>{game.name}</h1>
                <span>Id: {game.id}</span><br/>
                <p>{game.description_raw}</p>
                <h3>Genders</h3>
                {game.genres.map((g)=>(<span> {g.name} </span>))}
                <h3>Platforms</h3>
                {game.platforms.map((p)=>(<span> {p.platform.name} </span>))}
                <h4>Released: {game.released} </h4>
                <h4>Rating: {game.rating} </h4>
                <h4>Website: {game.website} </h4>
            </>
        )
    }
}

export default TargetB;