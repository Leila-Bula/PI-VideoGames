import {existe} from "./busqueda";

const filtrador=function(parametros,array){
    if(!(parametros.creado && parametros.existente)){
        if(parametros.creado){
            array=array.filter((v)=>{
                if(isNaN(String(v.id))){
                    return v;
                }
            })
        }else if(parametros.existente){
            array=array.filter((v)=>{
                if(!isNaN(v.id)){
                    return v
                }
            })
        }
    }
    if(parametros.genres.length!==0){
        array=array.filter((v)=>{
            for(let i=0;i<parametros.genres.length;i++){
                if(existe(v.genres,'name',parametros.genres[i].name)){
                    return v
                }
            }
        })
    }
    //ordenamiento
    if((!parametros.orderA && !parametros.orderR) || parametros.orderA){
        if(parametros.orden==='Ascendente'){
            array=array.sort(function(a,b){
                if(a.name > b.name){
                    return 1;
                }
                if(a.name < b.name){
                    return -1;
                }
                // a must be equal to b
                return 0;
            })
        }else if(parametros.orden==='Descendente'){
            array=array.sort(function(a,b){
                if(a.name > b.name){
                    return -1;
                }
                if(a.name < b.name){
                    return 1;
                }
                // a must be equal to b
                return 0;
            })
        }
    }

    if(parametros.orderR){
        if(parametros.orden==='Ascendente'){
            array=array.sort(function(a,b){
                if(a.rating > b.rating){
                    return 1;
                }
                if(a.rating < b.rating){
                    return -1;
                }
                // a must be equal to b
                return 0;
            })
        }else if(parametros.orden==='Descendente'){
            array=array.sort(function(a,b){
                if(a.rating > b.rating){
                    return -1;
                }
                if(a.rating < b.rating){
                    return 1;
                }
                // a must be equal to b
                return 0;
            })
        }
    }
    
    return array;
}

export default filtrador;