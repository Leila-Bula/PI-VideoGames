import axios from "axios";

export const createVideogame=function(p){
    return async function(dispatch){
        await axios({
            method: 'post',
            url: 'http://localhost:3001/videogame',
            data: {
              ...p
            }
          }).then((r)=>{
              dispatch({type:'create',payload:{...p,id:r.data.id}})
          }).catch((e)=>{console.log(e)})
    }
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
        console.log(data.data.length)
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