import React from "react";
import Pagina from "../../functions/paginado";
import filtrador from "../../functions/filtrando"
import {store} from "../../store";

const Targets=function({parametros}){
    var videogames=store.getState().Videogames;
    videogames=filtrador(parametros,videogames);
    return (
        <div>
            <Pagina array={videogames} p={1} ncp={15} ncf={5} />
        </div>
    );
}

export default Targets;