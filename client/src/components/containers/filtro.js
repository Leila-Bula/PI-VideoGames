import "../../CSS/Filtro.css";
import React from "react";
import Check from "../presentational/checks";
import Boton from "../presentational/boton";
import { useSelector } from "react-redux";

const FiltroSec=function({filtro1,filtro2,paginado}){
    var Genres=useSelector((state)=>state.Genres);
    var nf=Math.floor(Genres.length/2);
    return (
        <div className="filtro" >
            <h3>Filtrar por:</h3>
            <section id="sec1">
                <Check id='existente' tipo='b' nombre='creado' texto='Existente' funcion={filtro1} valor='existente'/>
                <Check id='creado' tipo='b' nombre='creado' texto='Creado' funcion={filtro1} valor='creado'/>
            </section>
            <h3>Generos</h3>
            <section id="sec2">
                <div className="tipo" id="izquierda" >
                    {Genres.slice(0,nf).map((t)=><Check id={t.id} tipo='a' nombre='type' texto={t.name} funcion={filtro2} valor={t.name}/>)}
                </div>
                <div className="tipo" id="derecha" >
                    {Genres.slice(nf,Genres.length).map((t)=><Check id={t.id} tipo='a' nombre='type' texto={t.name} funcion={filtro2} valor={t.name}/>)}
                </div>
            </section>
            <br/>
            <Boton tipo="<" text='Atras' clic={paginado} />
            <Boton tipo=">" text='Adelante' clic={paginado} />
        </div>
    )
}

export default FiltroSec;