import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Merceria3m from '/images/3m.jpg';
import ArcoIris from '/images/arco-iris.png';
import Passarinho from '/images/passarinho-new.png';
import Ruscito from '/images/ruscito.png';
import Moreira from '/images/moreira.jpg'
import VarejaoFartura from '/images/varejao-fartura.jpg';
import VarejaoQualidade from '/images/vareja-qualidade.jpg';
import Miami from '/images/miami-nova.jpg';
import TioJoao from '/images/feirao-tio-joao.jpg';
import EmporioCampo from '/images/emporio-do-campo.jpg';
import PadariaVovoLucia from '/images/padaria-vovo-lucia.jpg';
import PadariaToninho from '/images/padaria-toninho.png';
import PadariaPedrasLua from '/images/padaria-pedra-lua.jpg';
import MercadoToninhoServ from '/images/mercado.png';
import SupermercadoBuenoServ from '/images/bueno-serv.jpg';
import FaturaMix from '/images/fartura-mix.jpg'

const PartnersCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Array de parceiros (exemplo)
const partners = [
  { id: 1,name: 'Hortifruti Passarinho', logo: Passarinho, link: 'https://passarinhohortifruti.com.br/' },
  { id: 2,name: 'Supermercado Arco Íris', logo: ArcoIris, link: 'https://www.facebook.com/people/Supermercados-Arco-%C3%8Dris/100089706281183/' },
  { id: 3,name: 'Supermercados Ruscito', logo: Ruscito, link: 'https://supermercadosruscito.com.br/' },
  { id: 4,name: 'Padaria Vovo Lucia', logo: PadariaVovoLucia, link: 'https://www.instagram.com/padariavovolucia/' },
  { id: 5,name: 'Mercearia 3M', logo: Merceria3m, link: 'https://www.mercearia3m.com.br' },
  { id: 6,name: 'Supermercados Moreira', logo: Moreira, link: 'https://www.facebook.com/SupermercadosMoreira/'},
  { id: 7,name: 'Varejão da Fartura', logo: VarejaoFartura, link: 'https://pedidos.ovarejaodafartura.com.br/' },
  { id: 8,name: 'Varejão da Qualidade', logo: VarejaoQualidade, link: 'https://www.instagram.com/varejaodaqualidade/' }, 
  { id: 9,name: 'Supermercado Miami', logo: Miami, link: 'https://www.instagram.com/supermercadomiami/' },
  { id: 10,name: 'Feirão Tio João', logo: TioJoao, link: 'https://www.facebook.com/p/Feir%C3%A3o-Tio-Jo%C3%A3o-100057561095181/' },
  { id: 11, name: 'Empório do Campo Hortifruti', logo: EmporioCampo, link: 'https://www.facebook.com/emporiodocampohortifruti/' },
  { id: 13,name: 'Padaria do Toninho', logo: PadariaToninho, link: 'https://www.facebook.com/padariaeconfeitariatoninho/' },
  { id: 14,name: 'Supermercados Bueno Serve', logo: SupermercadoBuenoServ, link: 'https://www.instagram.com/buenoserve.supermercados/' },
  { id: 15,name: 'Fartura Mix São Carlos', logo: FaturaMix, link: 'https://www.facebook.com/farturamix/'},
  { id: 16,name: 'Fartura Mix Araraquara', logo: FaturaMix, link: 'https://www.facebook.com/farturamix/videos/araraquara/3071130403169428/'},
  { id: 17,name: 'Padaria Pedras da Lua', logo: PadariaPedrasLua, link: '' },
  { id: 18, name: 'Mercado Toninho Serv', logo: MercadoToninhoServ, link: '' }
];

  return (
    <section className="partners-section" id="partners">
      <div className="container">
        <h2 className="section-title">Nossos Parceiros</h2>
        <p className="section-description">Conheça as empresas que confiam em nossos produtos</p>
        
        <div className="carousel-container">
          <Slider {...settings}>
            {partners.map(partner => (
              <div key={partner.id} className="partner-item">
                <a href={partner.link} target="_blank" rel="noopener noreferrer"></a>
                <img src={partner.logo} alt={partner.name} />
                <h3>{partner.name}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;