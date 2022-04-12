import "../CSS/Create.css";
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
        img: "",
        website: "",
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
        setVideogame({
            ...videogame,
            platforms:videogame.platforms+e.target.previousElementSibling.value+","
        })
    }

    const handleSubmit=function(e){
        e.preventDefault();
        if(videogame.genres.length!==0 && videogame.name!=="" && videogame.platforms!=="" && videogame.description!==""){
            var create=dispatch(createVideogame(videogame));
            if(create){
                alert("Succefully! Videogame create")
            }else{
                alert("Error! Try again")
            }
        }else{
            alert("Please, Fill in all the fields marked with (*)")
        }
    }

    return (
        <div className="create">
            <h1>Create your Videogame </h1>
            <form onSubmit={handleSubmit}>
                <label className="label" >Name*: </label>
                <input type="text" name="name" value={videogame.name} onChange={handleChange} /><br/>
                <label className="label" >Description*: </label>
                <input type="text" name="description" value={videogame.description} onChange={handleChange} /><br/>
                <label className="label" >Released: </label>
                <input type="text" name="released" value={videogame.released} placeholder="aaaa-mm-dd" onChange={handleChange} /><br/>
                <label className="label" >Rating: </label>
                <input type="number" name="rating" value={videogame.rating} onChange={handleChange} /><br/>
                <label className="label" >Imagen (url): </label>
                <input type="text" name="img" value={videogame.img} onChange={handleChange} /><br/>
                <label className="label" >Website: </label>
                <input type="text" name="webside" value={videogame.webside} onChange={handleChange} /><br/>
                <label className="label" >Genders*:</label>
                {videogame.genres.map((g)=><span> {g.name} </span>)}
                <br/>
                <select multiple={true} name="genres" className="select">
                    {genres.map((g)=><option onClick={handleSelect}>{g.name}</option>)}
                </select><br/>
                <label className="label" >Platforms*: </label>
                <span> {videogame.platforms} </span>
                <br/><input type="text" name="platforms" />
                <input type="button" onClick={handleClick} value="+" />
                <br />
                <input type="submit" value="Create" className="boton"/>
            </form>
        </div>
    );
}

export default Create;