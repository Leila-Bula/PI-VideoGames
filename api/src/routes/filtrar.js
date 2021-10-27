module.exports=(arr,n)=>{
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