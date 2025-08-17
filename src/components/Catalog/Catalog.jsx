import React from 'react';
import './Catalog.css';

const Catalog = () => {
  // Função para lidar com o download do catálogo
  const handleDownload = () => {
    // Em um ambiente de produção, este seria o caminho para um PDF real
    const catalogPath = '/catalogo_produtos_agape_delicias_caseiras.pdf';
    
    // Abre o arquivo em uma nova aba
    window.open(catalogPath, '_blank');
  };

  return (
    <section className="catalog-section" id="catalog">
      <div className="catalog-container">
        <div className="catalog-content">
          <h2>Nosso Catálogo</h2>
          <p>
            Baixe nosso catálogo completo e descubra toda a variedade de 
            biscoitos artesanais que a Ágape Delícias Caseiras tem para oferecer.
          </p>
          <button className="download-button" onClick={handleDownload}>
            <span className="download-icon">📥</span>
            Baixar Catálogo PDF
          </button>
        </div>
        <div className="catalog-image">
          {/* Aqui você pode adicionar uma imagem representativa do catálogo */}
          <div className="catalog-preview">
            <div className="catalog-cover">
              <h3>Catálogo</h3>
              <h4>Ágape Delícias Caseiras</h4>
              <p>Edição 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;