import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => setOpen(!open);
  const handleLink = () => setOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#home">
            <img src="/images/logo.png" alt="Ágape Delícias Caseiras" />
          </a>
        </div>
        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={handleMenu}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`navigation${open ? ' open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={handleLink}>Home</a></li>
            <li><a href="#products" onClick={handleLink}>Produtos</a></li>
            <li><a href="#about" onClick={handleLink}>Sobre Nós</a></li>
            <li><a href="#partners" onClick={handleLink}>Parceiros</a></li>
            <li><a href="#testimonials" onClick={handleLink}>Depoimentos</a></li>
            <li><a href="#contact" onClick={handleLink}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;