import React from 'react';
import './Products.css';

const Products = () => {
  // Array de produtos (exemplo)
  const products = [
    {
    id: 1,
    name: 'Biscoito de Chocolate',
    description: 'Delicioso biscoito caseiro de chocolate com gotas de chocolate meio amargo.',
    image: '/images/chocolate.png',
    category: 'Chocolate'
    },
    {
      id: 2,
      name: 'Biscoito de Coco',
      description: 'Biscoito caseiro de coco com cobertura de coco docinho.',
      //price: 'R$ 14,90',
      image: '/images/coco.png',
      category: 'Coco'
    },
    {
      id: 3,
      name: 'Biscoito de Casadinho de docê de leite',
      description: 'Biscoito caseiro com recheio de docê de leite puro e cobertura de açúcar de confeiteiro.',
      //price: 'R$ 16,90',
      image: '/images/casadinho.png',
      category: 'Aveia'
    },
    {
      id: 4,
      name: 'Biscoito de Castanha de caju',
      description: 'Biscoito caseiro com pedaços de castanha do caju.',
      //price: 'R$ 18,90',
      image: '/images/castanha.png',
      category: 'Castanha'
    },
    {
      id: 5,
      name: 'Biscoito de Nata',
      description: 'Biscoito caseiro com sabor nata.',
      //price: 'R$ 15,90',
      image: '/images/nata.png',
      category: 'Frutas'
    },
    {
      id: 6,
      name: 'Biscoito de Canela',
      description: 'Biscoito caseiro de canela com cobertura de canela em pó docinho.',
      //price: 'R$ 14,90',
      image: '/images/canela.png',
      category: 'Canela'
    },
    {
      id: 7,
      name: 'Biscoito de Amanteigados',
      description: 'Biscoito caseiro amanteigado.',
      //price: 'R$ 15,90',
      image: '/images/amanteigados.png',
      category: 'Amanteigados'
    },
    {
      id: 8,
      name: 'Biscoito de Beliscão de goiabada',
      description: 'Biscoito caseiro com recheio de docê de goiaba pura.',
      //price: 'R$ 16,90',
      image: '/images/beliscao.png',
      category: 'Beliscão'
    },
  ];

  return (
    <section className="products-section" id="products">
      <div className="container">
        <h2 className="section-title">Nossos Produtos</h2>
        <p className="section-description">Conheça nossos deliciosos biscoitos caseiros</p>
        
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-category">{product.category}</span>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;