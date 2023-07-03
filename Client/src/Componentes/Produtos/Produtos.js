import React from 'react';
import '../../styles/produtos.css';
import Menu from '../Menu/Menu';

import TProdutosImg from '../../Assets/to_readme/produtos.png';

const Produtos = () => {
  return (
    <div>
      <h1 className="title">
        <img
          src={TProdutosImg}
          alt="LogoProdutos"
          className="LogoProdutos"
        />
      </h1>
      <div className="products-container">
        <div className="top-row">
          <div className="product product1"></div>
          <div className="product product2"></div>
          <div className="product product3"></div>
          <div className="product product4"></div>
          <div className="product product5"></div>
          <div className="product product6"></div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Produtos;
