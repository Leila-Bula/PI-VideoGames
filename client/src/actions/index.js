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
            dispatch({type:'create',payload:{...p,id:r.data.id}});
            return true;
        }).catch((e)=>{
            console.log(e);
            return false;
        })
    }
}

export const getG=function(){
    return async function(dispatch){
        await axios.get('http://localhost:3001/genres').then((r)=>{
            dispatch({type:'getGenres',payload:r.data});
            return true;
        }).catch((e)=>{
            console.log(e);
            return false;
        });
    }
}

export const getV=function(){
    return async function(dispatch){
        await axios.get('http://localhost:3001/videogames').then((r)=>{
            dispatch({type:'getVideogames',payload:r.data});
            return true;
        }).catch((e)=>{
            console.log(e);
            return false;
        });
    }
}

export const searchV=function(p){
    return async function(dispatch){
        await axios.get(`http://localhost:3001/videogames?name=${p}`).then((r)=>{
            dispatch({type:"searchV",payload:r.data});
            return true;
        }).catch((e)=>{
            console.log(e);
            return false;
        });
    }
}

export const videogame=function(p){
    return async function(dispatch){
        await axios.get(`http://localhost:3001/videogame/${p}`).then((r)=>{
            dispatch({type:"videogame",payload:r.data});
            return true
        }).catch((e)=>{
            console.log(e);
            return false;
        });
    }
}