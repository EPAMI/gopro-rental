import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 
import Focaly from '../assets/image00007.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Focaly} alt="Focaly Logo" className="d-inline-block align-text-top logo" />
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Caméras Embarquées</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">Appareils Photos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-primary text-white" href="#book-now">Book Now</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
