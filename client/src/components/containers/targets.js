import React from "react";
import Pagina from "../../functions/paginado";
import filtrador from "../../functions/filtrando"
import {store} from "../../store";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

const Targets=function({parametros}){
    var videogames=useSelector((state)=>state.Videogames);

    if(useLocation().search){
        videogames=store.getState().search;
    }else{
        videogames=store.getState().Videogames;
    }

    if(videogames){
        videogames=filtrador(parametros,videogames);
        return (
            <div>
                <Pagina array={videogames} p={parametros.pagina} ncp={15} ncf={5} />
            </div>
        );
    }else{
        return (
            <div>
                {videogames}
            </div>
        )
    }
}

export default Targets;