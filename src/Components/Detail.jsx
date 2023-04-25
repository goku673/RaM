import React from "react";
import "./Detail.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export default function Detail (){
const {id} = useParams();
const [character,setCharacter] = useState({});
useEffect( ()=>{
 axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({data})=>{
             if(data.name){
                setCharacter(data);
             }else{
               window.alert("no hay personajes con ese ID")
             }

 });
 return setCharacter({});


},[id]);
// el useEffect depende todo  de ID para que se muestre
       return (
        <div>
       
             <h1>  Detail </h1>
             <h2> {character.name}</h2>
             <h2>{character.status}</h2>
             <h2>{character.species}</h2>
             <h2> {character.gender}</h2>
             <h2>{character.origin?.name}</h2>
             <img src={character.image} alt={character.name}></img>
        </div>
       );
}
