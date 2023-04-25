import React from 'react';
import './App.css';
import Cards from './Components/Cards';
import NavBar from './Components/NavBar';
//import characters from './data';
import { useState } from 'react';
import axios from "axios";
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import About from './Components/About';
import Detail from './Components/Detail';
import Favorites from './Components/Favorites';
function App() {
  const [characters,setCharacters] = useState([]);

    function onSearch(characterID){
          axios.get(`https://rickandmortyapi.com/api/character/${characterID}`)
          .then(
              ({data})=>{
                if(data.name){
                  console.log(data.name)
                 let existe = characters.find((ch)=> ch.id === data.id)
                 if(existe){
                   alert("ya existe")
                 }else{
                      setCharacters((olchars) =>[...olchars,data]);
                 }
                
                }else{
                  window.alert("no hay personajes con ese ID");
                }

              }
          )
        }

        function onClose (id){
          setCharacters((olchars)=>{

            return olchars.filter((ch)=> ch.id !== id)
          })
        }

   console.log(characters)
  return (
    <div className="App">
      <NavBar onSearch ={onSearch}></NavBar>

        <Routes>
             <Route path='/' element={<Login/>}></Route>
             <Route path='/home' element={<Cards characters={characters} onClose={onClose}></Cards>}></Route>
             <Route path='/about' element={<About/>}></Route>
             <Route path='/favorites' element={<Favorites onClose={onClose}/>}></Route>
             <Route path='/detail/:id' element={<Detail/>}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
