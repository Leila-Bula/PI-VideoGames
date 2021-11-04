import React, { useState } from "react";
import { useSelector } from "react-redux";
import { existe, busca } from "../functions/busqueda";
import OrderSec from "./containers/orden";
import FiltroSec from "./containers/filtro";
import Targets from "./containers/targets"
import Findbar from "./containers/Findbar";

const Home=function(){

    var genres=useSelector((state)=>state.Genres);
    const [params,setParams]=useState({
        pagina:1,
        creado:false,
        existente:false,
        genres:genres,
        swiche:false,
        orden:'Ascendente',
        orderA:false,
        orderR:false,
    });

    const filtroG=function(e){
        if(!params.swiche){
            setParams({
                ...params,
                swiche:true,
                pagina:1,
                genres:params.genres.filter((g)=>g.name===e.target.value)
            });
        }else{
            if(existe(params.genres,'name',e.target.value)){
                setParams({
                    ...params,
                    pagina:1,
                    genres:params.genres.filter((g)=>g.name!==e.target.value)
                });
            }else{
                setParams({
                    ...params,
                    pagina:1,
                    genres:[...params.genres,busca(genres,'name',e.target.value)]
                })
            }
        }
    }

    const filtroEC=function(e){
        if(e.target.value==='existente'){
            if(params.existente){
                setParams({
                    ...params,
                    existente:false,
                    pagina:1
                });
            }else{
                setParams({
                    ...params,
                    existente:true,
                    pagina:1
                })
            }
        }else if(e.target.value==='creado'){
            if(params.creado){
                setParams({
                    ...params,
                    creado:false,
                    pagina:1
                })
            }else{
                setParams({
                    ...params,
                    creado:true,
                    pagina:1
                })
            }
        }
    }

    const order1=function(e){
        setParams({
            ...params,
            orden:e.target.options[e.target.options.selectedIndex].label
        })
    }

    const  order2 =function(e){
        if(e.target.value==='0'){
            if(params.orderA){
                setParams({
                    ...params,
                    orderA:false
                })
            }else{
                setParams({
                    ...params,
                    orderA:true
                })
            }
        }else if(e.target.value==='1'){
            if(params.orderR){
                setParams({
                    ...params,
                    orderR:false
                })
            }else{
                setParams({
                    ...params,
                    orderR:true
                })
            }
        }
    }

    const pagnav=function(e){
        if(e.target.id==='Atras'){
            if(params.pagina===1){
                setParams({
                    ...params,
                    pagina:'ultimapag'
                })
            }else{
                setParams({
                    ...params,
                    pagina:--params.pagina
                })
            }
        }else{
            if(params.pagina==='ultimapag'){
                setParams({
                    ...params,
                    pagina:1
                })
            }else{
                setParams({
                    ...params,
                    pagina:++params.pagina
                })
            }
        }
    }

    return (
        <div>
            <Findbar />
            <OrderSec order1={order1} order2={order2} />
            <div id='bd'>
                <Targets parametros={params} />
                <FiltroSec filtro1={filtroEC} filtro2={filtroG} paginado={pagnav} />
            </div>
        </div>
    );
}

export default Home;