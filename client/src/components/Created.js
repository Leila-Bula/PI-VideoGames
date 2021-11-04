import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVideogame } from "../actions";
import { busca } from "../functions/busqueda";

const Create=function(){
    const dispatch=useDispatch();
    const genres=useSelector((state)=>state.Genres);

    const [videogame,setVideogame]=useState({
        name: "",
        description: "",
        released: "",
        rating: 0.0,
        platforms: "",
        genres: []
    });

    const handleChange=function(e){
        setVideogame({
            ...videogame,
            [e.target.name]:e.target.value
        })
    }

    const handleSelect=function(e){
        var gen=busca(genres,"name",e.target.value)
        setVideogame({
            ...videogame,
            genres:[...videogame.genres,gen]
        })
    }

    const handleClick=function(e){
        console.log(e)
    }

    const handleSubmit=function(e){
        e.preventDefault();
        dispatch(createVideogame(videogame));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="name" value={videogame.name} onChange={handleChange} /><br/>
                <label>Description: </label>
                <input type="text" name="description" value={videogame.description} onChange={handleChange} /><br/>
                <label>Released: </label>
                <input type="text" name="released" value={videogame.released} onChange={handleChange} /><br/>
                <label>Rating: </label>
                <input type="number" name="rating" value={videogame.rating} onChange={handleChange} /><br/>
                <label>Genders:</label>
                {videogame.genres.map((g)=><span> {g.name} </span>)}
                <br/>
                <select multiple={true} name="genres" >
                    {genres.map((g)=><option onClick={handleSelect}>{g.name}</option>)}
                </select><br/>
                <label>Platforms: </label>
                <input type="text" name="platforms" value={videogame.platforms} onChange={handleChange}/>
                <input type="button" onClick={handleClick} value="+" />
                <br />
                <input type="submit" value="Create" />
            </form>
        </div>
    );
}

export default Create;