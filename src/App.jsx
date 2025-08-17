import React from 'react'
import './App.css'

// Importando os componentes
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PartnersCarousel from './components/Carousel/Carousel'
import Products from './components/Products/Products'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Catalog from './components/Catalog/Catalog'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="hero-section" id="home">
          <video autoPlay muted loop>
            <source src="/styles/video/video-agape.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
          <div className="hero-content">
            <h1>Ágape Delícias Caseiras</h1>
            <p>Biscoitos artesanais feitos com amor e dedicação</p>
            <a href="#produtos"><button className="cta-button">Conheça Nossos Produtos</button></a>
          </div>
        </div>
        <div id="produtos">
          <Products />
        </div>
        <About />
        <Catalog />
        <PartnersCarousel />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
    )
}

export default App
