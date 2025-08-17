import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  // Número de WhatsApp da empresa (substitua pelo número real)
  const phoneNumber = '5516991469079';
  
  // Mensagem pré-definida (opcional)
  const message = 'Olá! Gostaria de saber mais sobre os produtos da Ágape Delícias Caseiras.';
  
  // Construir o link do WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a 
      href={whatsappLink} 
      className="whatsapp-button" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="tooltip">Fale conosco</span>
    </a>
  );
};

export default WhatsAppButton;