import React from 'react';
import './Footer.css';
// Importando ícones para WhatsApp e download
import { FaWhatsapp, FaInstagram, FaFacebook, FaFilePdf } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" id='contact'>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Ágape Delícias Caseiras</h3>
          <p>Biscoitos caseiros feitos com amor e dedicação para você e sua família.</p>
        </div>
        
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: agapedeliciascaseirass@gmail.com</p>
          <p>Telefone: (16) 99146-9079</p>
          <p>Endereço: Rua Artin Agazarian, 114 - São Carlos/SP</p>
        </div>
        
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/agapedeliciascaseiras/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram className="social-icon" /> Instagram
            </a>
            <a href="https://facebook.com/agapedeliciascaseiras" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebook className="social-icon" /> Facebook
            </a>
            <a href="https://wa.me/5516991469079" target="_blank" rel="noopener noreferrer" className="social-link whatsapp-link">
              <FaWhatsapp className="social-icon" /> WhatsApp
            </a>
            <a href="#catalog" className="social-link">
              <FaFilePdf className="social-icon" /> Catálogo PDF
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="footer-biblica">
          <p>
            "Eu sou o Alfa e o ômega, o princípio e o fim, o primeiro e o derradeiro."
          </p>
            <i className="footer-biblica-versiculo">Apocalipse 22:13</i>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ágape Delícias Caseiras. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;