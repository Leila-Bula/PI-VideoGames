const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();
const {API_KEY} = process.env;
const filtrar=require('./filtrar');
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
            let promise1=axios.get(`https://api.rawg.io/api/games?&key=${API_KEY}`).then((r)=>{
                games=filtrar(r.data.results,r.data.results.length);
            }).catch((e)=>{res.json(e)});
            let promise2=axios.get(`https://api.rawg.io/api/games?&key=${API_KEY}&page=2`).then((r)=>{
                games=[...games,...filtrar(r.data.results,r.data.results.length)];
            }).catch((e)=>{res.json(e)});
            let promise3=axios.get(`https://api.rawg.io/api/games?&key=${API_KEY}&page=2`).then((r)=>{
                games=[...games,...filtrar(r.data.results,20)];
            }).catch((e)=>{res.json(e)});
            Promise.all([promise1,promise2,promise3]).then((r)=>{
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
                }
            }).then((r)=>{
                res.json(r);
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
    const {name,description,released,rating,platforms,genders}=req.body;
    try{
        await Videogame.create({
            name:name,
            description:description,
            released:released,
            rating:rating,
            platforms:platforms,
        }).then(async (r)=>{
            try{
                var asignaciones=[];
                for(let i=0;i<genders.length;i++){
                    let [gender,created]=await Gender.findOrCreate({
                        where: {name:genders[i]},
                        default: {name:genders[i]}
                    });
                    if(gender){
                        asignaciones.push(r.addGender(gender.id));
                    }else{
                        asignaciones.push(r.addGender(created.id));
                    }
                }
                Promise.all(asignaciones).then((r)=>{res.json({Success: 'Videogame created'})});
            }catch(error){res.json([{Error:'unassigned gender'},error])}
        }).catch((e)=>{res.json(e)});
    }catch(error){res.json(error)}
});

module.exports = router;
