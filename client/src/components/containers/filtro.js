import React from "react";
import Check from "../presentational/checks";
import Boton from "../presentational/boton";
import { useSelector } from "react-redux";

const FiltroSec=function({filtro1,filtro2,paginado}){
    var Genres=useSelector((state)=>state.Genres);
    return (
        <div>
            <h3>Filtrar por:</h3>
            <Check id='existente' tipo='b' nombre='creado' texto='Videogame Existente' funcion={filtro1} valor='existente'/>
            <Check id='creado' tipo='b' nombre='creado' texto='Videogame Creado' funcion={filtro1} valor='creado'/>
            <h3>Tipos</h3>
            <div>{Genres.map((t)=><Check id={t.id} tipo='a' nombre='type' texto={t.name} funcion={filtro2} valor={t.name}/>)}</div>
            <br/>
            <Boton text='Atras' clic={paginado} />
            <Boton text='Adelante' clic={paginado} />
        </div>
    )
}

export default FiltroSec;