import "../../CSS/Findbar.css";
import React, { useState } from "react";
import { useDispatch }  from "react-redux";
import { searchV } from "../../actions";
import { useHistory} from "react-router-dom";

const Findbar=function(){
    const [name,setName]=useState("");
    const dispatch=useDispatch();
    const history=useHistory();

    const handleChange=function(e){
        setName(e.target.value);
    }
    const HandleSubmit=function(e){
        e.preventDefault();
        dispatch(searchV(name))
        setTimeout(()=>{history.push(`/home?name=${name}`)},3000); 
    }

    return (
        <div className="findbar">
            <h1>VIDEOGAMES</h1>
            <form name='findV' onSubmit={HandleSubmit}>
                <input type='text' name='find' value={name} onChange={handleChange}/>
                <input type='submit' value='Buscar' id="button" />
            </form>
        </div>
    )
}

export default Findbar;