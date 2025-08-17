import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">Nossa História</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img src="images/foto-secao.jpg" alt="História da Ágape Delícias Caseiras" />
          </div>
          
          <div className="about-text">
            <h3>Ágape Delícias Caseiras</h3>
              <p>
                Localizada na cidade São Carlos - SP, a empresa iniciou suas atividades em 2018. 
                É uma fábrica de biscoitos amanteigados que vem conquistando o mercado alimentício, tendo como objetivo 
                fornecer produtos de qualidade e variedade. Atendimento diferenciado é uma de nossas metas com os clientes 
                e fornecedores, a fim de realizar um constante aperfeiçoamento dos nossos produtos, sempre com qualidade.
              </p>
              <p>
                Nossa história é marcada pela dedicação e paixão pelo que fazemos. Com o passar dos anos, temos trabalhado 
                arduamente para aprimorar nossas receitas e oferecer uma gama diversificada de produtos, atendendo às 
                necessidades dos nossos consumidores.
              </p>
              <p>
                Acreditamos que a qualidade deve ser a base de tudo que oferecemos, e por isso selecionamos os melhores 
                ingredientes e mantemos um rigoroso controle de qualidade em cada etapa da produção. Nossos produtos são 
                feitos com amor e carinho, visando sempre a satisfação dos nossos clientes.
              </p>
              <p>
                Estamos sempre abertos a feedbacks e sugestões, pois acreditamos que a comunicação é fundamental para o 
                crescimento. Não somos apenas uma empresa; somos uma família que se importa com cada cliente e busca oferecer o melhor a todos.
              </p>
          </div>
        </div>
        
        <div className="values-container">
          <div className="value-item">
            <h4>Missão</h4>
            <p>Desenvolver, produzir e fornecer produtos de qualidade.</p>
          </div>
          
          <div className="value-item">
            <h4>Visão</h4>
            <p>Ser reconhecida no mercado alimentício, sempre buscando melhoramento e 
                inovação no desenvolvimento dos produtos.</p>
          </div>
          
          <div className="value-item">
            <h4>Valores</h4>
            <p>Atuar com transparência, ética, eficiência e profissionalismo para a satisfação do cliente.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;