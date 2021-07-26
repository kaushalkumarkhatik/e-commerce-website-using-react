import React from 'react';
import { NavLink } from "react-router-dom";


const Navbar = () => {


  return (
    <>
    <header>
    <nav>
      <div class="logo">
KKK
    </div>
        <div class="logo">
  <i class="bx bx-shopping-bag"></i>
    </div>
      <input type="checkbox" id="click" />
      <label for="click" class="menu-btn">
        <i className="fas fa-bars" style={ { color: "#243a6f" }}></i>
      </label>
      <ul>
        <li><NavLink className="active" to="/">Home</NavLink></li>
        <li><NavLink to="#">Products</NavLink></li>
        <li><NavLink to="#">About</NavLink></li>
        <li><NavLink to="#">Contact Us</NavLink></li>
        <li><NavLink to="#">Account</NavLink></li>
    </ul>
    </nav>
  
    <div>
    <div className="hero">
  <h2>
    <span>70%</span>
    <span>sale off</span>
  </h2>
  <h1>
    <span>Summer Vibes</span><br />
    <span>mode on</span>
  </h1>
  <button className="btn">Shop Now</button>
    </div>
   <img className="banner" src="images/banner.png" alt="" />
    </div> 
    </header>
    < />

  );
}

export default Navbar;