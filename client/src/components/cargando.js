import React, { useState } from "react";
import {getGenres,getVideogames} from "../functions/request"

getVideogames();
getGenres();
const Cargando=function({Component,props}){
    const [render,setRender]=useState(false);
    setTimeout((e)=>setRender(true),20000);
    if(render){
        return (<Component {...props} />)
    }else{
        return (<span>Cargando</span>)
    }
}

export default Cargando;