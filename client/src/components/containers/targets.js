import React from "react";
import Pagina from "../../functions/paginado";
import filtrador from "../../functions/filtrando"
import {store} from "../../store";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getV } from "../../actions";

const Targets=function({parametros}){
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getV());
    },[]);

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
                <Pagina array={videogames} p={1} ncp={15} ncf={5} />
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