const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();
const {API_KEY} = process.env;
const {filtrar,filtrar2}=require('./filtrar');
const {Videogame,Gender}=require('../db')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
var swiche=false;

router.get('/videogames',async (req,res)=>{
    const {name}=req.query;
    var games=[];
    try{
        if(name){
            await axios.get(`https://api.rawg.io/api/games?search=${name}&search_precise=true&key=${API_KEY}`).then((r)=>{
                if(r.data.results.length>=15){
                    games=filtrar(r.data.results,15);
                }else if(r.data.results.length>0){
                    games=filtrar(r.data.results,r.data.results.length);
                }
                if(games.length>0){
                    res.json(games);
                }else{
                    res.json("No se encontraron coincidencias");
                }
            }).catch((e)=>{res.json(e)});
        }else{
            let promise1=axios.get(`https://api.rawg.io/api/games?page_size=40&key=${API_KEY}`).then((r)=>{
                games=filtrar(r.data.results,r.data.results.length);
            }).catch((e)=>{res.json(e)});
            let promise2=axios.get(`https://api.rawg.io/api/games?page_size=40&key=${API_KEY}&page=2`).then((r)=>{
                games=games.concat(filtrar(r.data.results,r.data.results.length));
            }).catch((e)=>{res.json(e)});
            let promise3=axios.get(`https://api.rawg.io/api/games?page_size=40&key=${API_KEY}&page=3`).then((r)=>{
                games=games.concat(filtrar(r.data.results,20));
            }).catch((e)=>{res.json(e)});
            let promise4=Videogame.findAll({include: Gender}).then((r)=>{
                console.log(games.length);
                games=games.concat(filtrar2(r));
                console.log(games.length);
            }).catch((e)=>{res.json(e)});
            Promise.all([promise1,promise2,promise3,promise4]).then((r)=>{
                console.log(games.length);
                res.json(games);
            }).catch((e)=>{res.json(e)});
        }
    }catch(error){
        res.json(error);
    }
});

router.get('/videogame/:idVideogame',async (req,res)=>{
    const {idVideogame}=req.params;
    try{
        if(!isNaN(idVideogame)){
            await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`).then((r)=>{
                res.json(r.data);
            }).catch((e)=>{res.json(e)});
        }else{
            await Videogame.findAll({
                where: {
                    id:idVideogame
                },
                include: Gender
            }).then((r)=>{
                res.json(r[0]);
            }).catch((e)=>{res.json(e)})
        }
    }catch(error){
        res.json(error);
    }
});

router.get('/genres', async (req,res)=>{
    try{
        if(swiche){
            await Gender.findAll().then((r)=>{
                if(r.length>0){
                    res.json(r);
                }
                res.json("There aren´t genders saved");
            }).catch((e)=>{res.json({Error:'Genders not finds'})});
        }else{
            swiche=true;
            var genres=[];
            await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`).then(async (r)=>{
                await r.data.results.forEach(gen => {
                    genres.push(Gender.create({
                        name:gen.name
                    }));
                });
                await Promise.all(genres).then(async (r)=>{
                    await Gender.findAll().then((r)=>{
                        if(r.length>0){
                            res.json(r);
                        }
                        res.json("There aren´t genders saved");
                    }).catch((e)=>{res.json({Error:'Genders not finds'})});
                }).catch((e)=>{res.json({Error:"Genders not saved"})})
            }).catch((e)=>{res.json([{Error:'An error occurred while requesting data from the external api'},e])});
        }
    }catch(error){res.json(error)}
});

router.post('/videogame', async (req,res)=>{
    const {name,description,released,rating,platforms,genres,img,website}=req.body;
    try{
        await Videogame.create({
            name:name,
            description:description,
            released:released,
            rating:rating,
            platforms:platforms,
            img:img,
            website:website
        }).then(async (r)=>{
            try{
                var asignaciones=[];
                for(let i=0;i<genres.length;i++){
                    let [gender,created]=await Gender.findOrCreate({
                        where: {name:genres[i].name},
                        default: {name:genres[i].name}
                    });
                    if(gender){
                        asignaciones.push(r.addGender(gender.id));
                    }else{
                        asignaciones.push(r.addGender(created.id));
                    }
                }
                Promise.all(asignaciones).then((r)=>{res.json({Success: 'Videogame created',id:r[0][0].videogameId})});
            }catch(error){res.json([{Error:'unassigned gender'},error])}
        }).catch((e)=>{res.json(e)});
    }catch(error){res.json(error)}
});

module.exports = router;
