import React from 'react';

const Boton=function({clic,text}){
    return (<button id={text} onClick={clic} type='button'>{text}</button>)
};

export default Boton;