import React from "react";
import { useState } from "react";
const SerchBar  = ({onSearch })=>{
 const [id,setId] = useState("");

 function handleChange (evento){
    setId(evento.target.value);
    console.log(evento.target.value)
 }
 // el value del input conectado al estado tiene que estar 
    return (

           <div>

              <input  onChange ={ handleChange}type="search" name="search" value={id}></input>
              <button onClick={()=>{onSearch(id)}}>agregar</button>
           </div>
    );

}

export default SerchBar