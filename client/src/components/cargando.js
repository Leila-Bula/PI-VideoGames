import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {getG,getV} from "../actions";

const Cargando=function({Component,props}){
    const [render,setRender]=useState(false);
    const dispatch=useDispatch()
    dispatch(getV());
    dispatch(getG());
    setTimeout((e)=>setRender(true),20000);
    if(render){
        return (<Component {...props} />)
    }else{
        return (<span>Cargando</span>)
    }
}

export default Cargando;