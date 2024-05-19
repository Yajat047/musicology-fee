import React, { useState } from 'react';
import './App.css'; 
import './Navbar.css';

function Navbar() {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <div className="main-header">
      <div className="container">
        <header>
          <div className="desktop">
            <div className="logo">
              <a href="#"><img src="/img/Logo.png" alt="LOGO"></img></a>
            </div>
            <div className="mobilebar"></div>
            <div className="nav">
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#main-slider">PRODUCT</a></li>
                <li><a href="#main-slider2">PROMO</a></li>
                <li><a href="#fifth-slider">ABOUT</a></li>
                <li><a href="#mainfooter">CONTACT</a></li>
              </ul>
            </div>
            <div className="search">
              <a href="#"><img src="/img/search.png" alt="SEARCH"></img></a>
            </div>
          </div>
          <div className="mobilenav">
            <div className="mobilebar">
              <button onClick={toggleMobileMenu} id="bars">
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
            <div className="logo">
              <img src="/img/Logo.png" alt="LOGO"></img>
            </div>
          </div>
          {isMobileMenuVisible && (
            <div className="monav">
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">PRODUCT</a></li>
                <li><a href="#">PROMO</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTACT</a></li>
              </ul>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}

export default Navbar;
