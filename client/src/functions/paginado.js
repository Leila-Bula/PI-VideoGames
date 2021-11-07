import React from "react";
import TargetA from "../components/presentational/targetA";
import { Link } from "react-router-dom";

const Celda=function({array}){
    return (
        <tr>
            {array.map((e)=><td><Link to={`/details/${e.id}`} ><TargetA info={e} /></Link></td>)}
        </tr>
    )
}
const Filas=function({array,n}){
    let filas=[];
    let m=Math.ceil(array.length/n)
    for(let i=0;i<m;i++){
        filas.push(array.slice(i*n,(i+1)*n))
    }
    return (
        <>
            {filas.map((e)=><Celda array={e}/>)}
        </>
    )
}

const paginado=function(array,n){
    var paginas=[];
    let m=Math.ceil(array.length/n)
    if(m<=0){
        paginas=[array];
    }else{
        var u=0
        for(let i=0;i<m;i++){
            paginas.push(array.slice(u,u+n));
            u=u+n;
        }
    }
    return paginas;
}

const Pagina=function({array,p,ncp,ncf}){
    var paginas=paginado(array,ncp);
    if(p<=paginas.length){
        return (
                <>
                    <table>
                        <Filas array={paginas[p-1]} n={ncf} />
                    </table>
                </>
            )
    }else{
        return (
            <>
                <table>
                    <Filas array={paginas[paginas.length-1]} n={ncf} />
                </table>
            </>
        )
    }
}

export default Pagina;