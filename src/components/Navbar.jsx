// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { FiSearch } from 'react-icons/fi';
import './Navbar.css';



const Navbar = () => {

  const [search, setSearchItem] = useState("");
  return (

    <div className="navbar">

      <div className="links">
        <FiSearch size={30} color="white" style={{ margin: '10px' }} />
        <input
          type="text"
          placeholder="Enter product name"
          onChange={(event) => {
            setSearchItem(event.target.value)
          }}
  
        />


          
  
  
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={33} style={{ marginTop: '10px' }} />
        </Link>
      </div>
      
    </div>
  );
  
}


export default Navbar;
