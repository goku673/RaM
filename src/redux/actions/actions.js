import { ADD_FAVORITO,REMOVE_FAV ,ORDER,FILTER ,RESET} from "./types";

export function addFavorito (character){
      
    return {

          type : ADD_FAVORITO,
          payload : character,
    };
}

export function removeFavorito (id){
     return {
        type : REMOVE_FAV,
        payload : id ,
     }
}

export function filterCards(gender){
     return {
        type : FILTER, 
        payload : gender,

     }
}

export function orderCards (order){
    return {
        type : ORDER,
        payload : order ,
    }
}
export function reset (){
    return {
        type :RESET,
    }
}