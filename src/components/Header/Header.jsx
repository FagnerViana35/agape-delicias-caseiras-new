import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#home">
            <img src="/images/logo.png" alt="Ágape Delícias Caseiras" />
          </a>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Produtos</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#partners">Parceiros</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;