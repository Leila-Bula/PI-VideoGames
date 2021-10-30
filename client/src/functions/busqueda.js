export function existe(arr,prop,val) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i][prop]===val){
            return true
        }
    }
    return false;
}

export function busca(arr,prop,val) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i][prop]===val){
            return arr[i]
        }
    }
    return {};
}