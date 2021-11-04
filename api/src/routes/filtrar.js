const filtrar=(arr,n)=>{
    var filtred=[];
    for(let i=0;i<n;i++){
        filtred.push({
            id:arr[i].id,
            name:arr[i].name,
            img:arr[i].background_image,
            genres:arr[i].genres,
            platforms:arr[i].platforms,
            rating:arr[i].rating,
        });
    }
    return filtred;
}

const genres=function(arr){
    var filtred=[];
    for(let i=0;i<arr.length;i++){
        filtred.push({
            id:arr[i].dataValues.id,
            name:arr[i].dataValues.name,
        });
    }
    return filtred;
}

const filtrar2=(arr)=>{
    var filtred=[];
    for(let i=0;i<arr.length;i++){
        filtred.push({
            id:arr[i].dataValues.id,
            name:arr[i].dataValues.name,
            img:null,
            genres:genres(arr[i].dataValues.genders),
            platforms:arr[i].dataValues.platforms,
            rating:arr[i].dataValues.rating,
        });
    }
    return filtred;
}

module.exports={
    filtrar:filtrar,
    filtrar2:filtrar2
}