const initialState={Genres:[],Videogames:[]};

const rootReducer=(state = initialState, action)=>{
    switch(action.type){
        case 'getGenres':
            return {...state,Genres:action.payload}
        case 'getVideogames':
            return {...state,Videogames:action.payload}
        case 'searchV':
            return {...state,search:action.payload}
        case 'create':
            return {...state,Videogames:[...state.Videogames,action.payload]}
        default:
            return state;
    }
}

export default rootReducer;