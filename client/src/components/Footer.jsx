import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Assurez-vous d'avoir un fichier CSS pour le footer si vous avez besoin de styles personnalisés

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h5 className="mb-3">Focaly</h5>
            <p className="text-muted">
              © {new Date().getFullYear()} Focaly. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled d-flex justify-content-end mb-0">
              <li className="ms-3">
                <a className="text-decoration-none text-dark" href="#home">Accueil</a>
              </li>
              <li className="ms-3">
                <a className="text-decoration-none text-dark" href="#features">Caméras Embarquées</a>
              </li>
              <li className="ms-3">
                <a className="text-decoration-none text-dark" href="#pricing">Appareils Photos</a>
              </li>
              <li className="ms-3">
                <a className="text-decoration-none text-dark" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
