export const createVideogame=function(p){
    return {type:'create',payload:{...p}}
}

export const getG=function(p){
    return {type:'getGenres',payload:p}
}

export const getV=function(p){
    return {type:'getVideogames',payload:p}
}