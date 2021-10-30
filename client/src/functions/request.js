import axios from 'axios';
import { getG, getV } from '../actions';
import { store } from '../store';

export const getGenres=function(){
    axios.get('http://localhost:3001/genres').then((r)=>{
        store.dispatch(getG(r.data));
    });
}

export const getVideogames=function(){
    axios.get('http://localhost:3001/videogames').then((r)=>{
        store.dispatch(getV(r.data));
    });
}
