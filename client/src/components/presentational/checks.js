import React from "react";

const Check=function({tipo,texto,nombre,valor,funcion}){
    if(tipo==='a'){
        return (<span>
            <input type='checkbox' name={nombre} value={valor} onClick={funcion} />
            <span>{texto}</span>
        </span>)
    }else{
        return (<span>
            <input type='checkbox' name={nombre} value={valor} onClick={funcion} /><br/>
            <span>{texto}</span>
        </span>)
    }
}

export default Check;