import  "./Card.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorito,removeFavorito } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
 
export default function Card ( props){
   const {id,name,status,species,gender,origin,image,onClose} = props
    const [isFav, setIsFav]  = useState(false);
    const dispatch = useDispatch(); 
    const {myFavorites} = useSelector((s)=>s);
    
    function handleFavorite (){
       if(isFav){
        setIsFav(false);
       dispatch (removeFavorito(id))  ;
       }else{
        setIsFav(true);
       dispatch(addFavorito(props));
       }

    }

    useEffect(() => {
      console.log(myFavorites)
      myFavorites.forEach((fav) => {
          if(fav.id === props.id){
              setIsFav(true);
          }
      });
  }, [myFavorites]);
  
     function superClouse (){

         onClose(id);
         dispatch(removeFavorito(id));
     }
    return (

        <div className="card">
        

           {isFav?  (<button onClick={handleFavorite}> ❤️</button>) : 
                    (<button onClick={handleFavorite}>🤍</button>)
           
        
        }



              <button onClick={superClouse}>x</button>
              <Link  className ="link"to={`/detail/${id}`}>
              
              <h2>{name}</h2>
              <h2>{status}</h2>
              <h2>{species}</h2>
              <h2>{gender}</h2>
              <h2>{origin}</h2>
              <img src={image} alt={name}></img>

              </Link>
              
              
      </div>
    ); 

}

// version  antigua cons el conect

// function mapStateToProp (state){
//     return {
//       myFavorites : state.myFavorites,
//     }
// }

// function  mapDispatchToProps (dispatch){
//    return{
//            addFavorito : (ch)=> dispatch(addFavorito(ch)),
//            removeFavorito : (id) => dispatch(removeFavorito(id)),
            
//         }
// }
// export default connect(mapStateToProp,mapDispatchToProps)(Card);