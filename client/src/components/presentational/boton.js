import React from 'react';

const Boton=function({clic,text,tipo}){
    if(tipo){
        return (<button id={text} onClick={clic} type='button'>{tipo}</button>)
    }else{
        return (<button id={text} onClick={clic} type='button'>{text}</button>)
    }
}

export default Boton;