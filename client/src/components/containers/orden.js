import React from "react";
import Check from "../presentational/checks";


const OrderSec=function({order1,order2}){
    return (
        <div>
            <span>Ordenar por: </span>
            <select onChange={order1}>
                <option>Ascendente</option>
                <option>Descendente</option>
            </select>
            <Check tipo='a' texto='Orden alfabetico' nombre='OrdenType' valor={0} funcion={order2} />
            <Check tipo='a' texto='Rating' nombre='OrdenType' valor={1} funcion={order2} />
        </div>
    )
}

export default OrderSec;