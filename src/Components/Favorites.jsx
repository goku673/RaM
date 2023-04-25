import React from "react";
// para mostrar todos aquelas card que son favoritas
import Card  from "./Card";
import { connect, useSelector } from "react-redux";
import { removeFavorito,orderCards,filterCards,reset} from "../redux/actions/actions";
import { useDispatch } from "react-redux";
 export default function Favorites ({onClose}){
  const {myFavorites} = useSelector((state) =>state);      
  const dispatch = useDispatch();  
    function closeFavorite(id){
             onClose (id);
            dispatch(removeFavorito(id)) ;
          }


        function handleOrder(evento){
          evento.preventDefault();
          const {name ,value} = evento.target ; 
           dispatch(orderCards(value));
        }  
        function handleFilter(evento){
          evento.preventDefault();
          const {name ,value} = evento.target ; 
           dispatch(filterCards(value));
        }  

        function resetButon (){
          dispatch(reset())
        }
    return (

        <div>

          <select onChange={handleOrder} name="order" defaultValue={"DEFAULT"}>
                 <option value="DEFAULT" disabled>Select Order</option>
                  <option value="Ascendente">Ascendente</option>
                  <option value = "Descendente">Descendente</option>

          </select>


          <select onChange={handleFilter} name="filter" defaultValue={"DEFAULT"}>
                 <option value="DEFAULT" disabled>Select filter</option>

                  <option value="Male">Male</option>
                  <option value = "Female">Female</option>
                  <option value="Genderless">Genderless</option>
                  <option value = "unknown">Unknown</option>

          </select>
          <button onClick={resetButon}> reset</button>
            {

              myFavorites  && myFavorites.map((element,index)=>{
                     return (
                     <Card   key={index}
                             id={element.id}
                             name={element.name}
                             status={element.status}
                             species={element.species}
                             gender={element.gender}
                             origin={element.origin.name}
                             image={element.image}
                             onClose= {()=> closeFavorite(element.id)}                           
                     > </Card>

                            );
                      })

               }

        </div>
    ); 
}

//  se eleminca de characters y no de my favorites ahi hay un pequeño bug    
// lo que tenemos que hacer es que  nos tenemos que traer una accion 
//   function mapDispath (dispatch){
     
//          return {
//             removeFavorito : (id)=>dispatch(removeFavorito(id))
//          }
//   }  

// function mapState(state){
//     return {
//          myFavorites : state.myFavorites
//     }
// }

// export default connect(mapState,mapDispath)(Favorites);