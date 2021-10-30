import React from "react";
import {store} from "../../store";
import Check from "../presentational/checks";
import Boton from "../presentational/boton";

const FiltroSec=function({filtro1,filtro2,paginado}){
    var Genres=store.getState().Genres;
    return (
        <div>
            <h3>Filtrar por:</h3>
            <Check id='existente' tipo='b' nombre='creado' texto='Videogame Existente' funcion={filtro1} valor='existente'/>
            <Check id='creado' tipo='b' nombre='creado' texto='Videogame Creado' funcion={filtro1} valor='creado'/>
            <h3>Tipos</h3>
            <div>{Genres.map((t)=><Check id={t.id} tipo='a' nombre='type' texto={t.nombre} funcion={filtro2} valor={t.nombre}/>)}</div>
            <br/>
            <Boton text='Atras' clic={paginado} />
            <Boton text='Adelante' clic={paginado} />
        </div>
    )
}

export default FiltroSec;