import React from "react";
import SerchBar from "./serchBar";
import "./NavBar.css"
import { Link } from "react-router-dom";

export default function NavBar({onSearch}){

             return (
                <div className="nav" >
                        <Link to="/home">  <button>HOME</button></Link>
                        <Link to="/about">  <button>ABOUT</button></Link>
                        <Link to="/favorites"> <button>FAVORITES</button></Link>
                  <SerchBar onSearch={onSearch}></SerchBar>
                </div>
             );
}