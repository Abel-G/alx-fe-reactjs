import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const customStyle ={
        backgroundColor: 'grey',
         display:'inline-block', 
         justifyContent: 'center',
         listStyle: 'none',
         margin: '10px',
         padding: '10px',
    }
  return (
    <nav>
      <ul>
        <li style ={customStyle}><Link to="/">Home</Link></li>
        <li style ={customStyle}><Link to="/about">About Us</Link></li>
        <li style ={customStyle}><Link to="/services">Services</Link></li>
        <li style ={customStyle}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;