import { ADD_FAVORITO,REMOVE_FAV,FILTER,ORDER,RESET} from "./actions/types";

const initialState = {
   data :[],
   myFavorites :[],
   myFavoritesOrigin :[]  // solo lo cambian el add y el remove 
}

export default function rootReducer(state= initialState,{type,payload}){
        switch(type){
        case ADD_FAVORITO : 
        return {
            ...state,
            myFavorites : [...state.myFavorites,payload],
            myFavoritesOrigin :[...state.myFavoritesOrigin,payload],
        };
        case REMOVE_FAV : 
          const newFavorites = state.myFavorites.filter((ch)=>ch.id !==payload);
        return {
             ...state,
             myFavorites : newFavorites,
             myFavoritesOrigin :newFavorites,
        }
        case FILTER :
          const newFilter = state.myFavoritesOrigin.filter((myF)=> myF.gender === payload);
           return {
               ...state,
                myFavorites : newFilter
           }

         case ORDER : 
         // para ordenar podemos utilizar el metodo short
          let newOrder = state.myFavoritesOrigin.sort((a,b)=>{
               if (a.id >b.id){
                 return "Ascendente" === payload ?   1 : -1 ; 
               }

               if(a.id < b.id){
                return  "Descendente" === payload?  1 : -1 ;
               }

               return 0 ; 
          });
         return {
                 ...state, 
                 myFavorites : newOrder,

         }
           
          case RESET :

          return {
            ...state,
            myFavorites : [...state.myFavoritesOrigin]
          }

          default : return state;
        }
        
}