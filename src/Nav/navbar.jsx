// import React, { useState } from "react";
import { Link} from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { faEdit, faTrash,faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Nav/navbar.css";

const Navbar = () => {
 return (
    <>
   <header className="header">
     <nav className="nav container">
       <a href="#" className="nav__logo">
         MyTodo
       </a>
       <Link to ="/profile" className="nav_profile"><FontAwesomeIcon icon={faUser} /></Link>
     </nav>
   </header>
   {/* <h1>HIHIHIHIHI</h1> */}
   </>
 );
};

export default Navbar;