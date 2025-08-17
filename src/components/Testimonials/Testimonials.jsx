import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  // Array de depoimentos (exemplo)
  const testimonials = [
    {
      id: 1,
      name: 'Ana Silva',
      role: 'Cliente',
      image: 'https://via.placeholder.com/100',
      text: 'Os biscoitos da Ágape são simplesmente deliciosos! Sempre que tenho visitas em casa, faço questão de servir esses biscoitos caseiros. Todos sempre elogiam o sabor e a qualidade.'
    },
    {
      id: 2,
      name: 'Carlos Oliveira',
      role: 'Proprietário de Café',
      image: 'https://via.placeholder.com/100',
      text: 'Como dono de um café, sempre busco produtos de qualidade para oferecer aos meus clientes. Os biscoitos da Ágape são um sucesso absoluto no meu estabelecimento. A parceria com eles foi uma das melhores decisões que tomei.'
    },
    {
      id: 3,
      name: 'Mariana Costa',
      role: 'Cliente',
      image: 'https://via.placeholder.com/100',
      text: 'Experimentei os biscoitos de chocolate da Ágape em um evento e me apaixonei! Desde então, sempre faço encomendas para ocasiões especiais. O sabor é incrível e dá para sentir que são feitos com muito carinho.'
    },
    {
      id: 4,
      name: 'Pedro Santos',
      role: 'Gerente de Supermercado',
      image: 'https://via.placeholder.com/100',
      text: 'Desde que começamos a vender os produtos da Ágape em nosso supermercado, as vendas não param de crescer. Os clientes sempre voltam para comprar mais, o que demonstra a qualidade e o sabor excepcional desses biscoitos caseiros.'
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="section-title">Depoimentos</h2>
        <p className="section-description">O que nossos clientes dizem sobre nós</p>
        
        <div className="testimonials-slider">
          <Slider {...settings}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-item">
                <div className="testimonial-content">
                  <div className="quote-icon">❝</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="author-image" 
                    />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;