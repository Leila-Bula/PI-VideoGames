import axios from "axios";

export const createVideogame=function(p){
    return {type:'create',payload:{...p}}
}

export const getG=function(){
    return async function(dispatch){
        const data=await axios.get('http://localhost:3001/genres');
        return dispatch({type:'getGenres',payload:data.data})
    }
}

export const getV=function(){
    return async function(dispatch){
        const data=await axios.get('http://localhost:3001/videogames');
        return dispatch({type:'getVideogames',payload:data.data})
    }
}

export const searchV=function(p){
    return async function(dispatch){
        await axios.get(`http://localhost:3001/videogames?name=${p}`).then((r)=>{
            dispatch({type:"searchV",payload:r.data})
        })
    }
}