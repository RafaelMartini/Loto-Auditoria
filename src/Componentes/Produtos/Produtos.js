import React from 'react';
import '../../styles/produtos.css';
import Menu from '../Menu/Menu';

import TProdutosImg from '../../Assets/to_readme/produtos.png';
import GeradorLotomaniaPayImg from '../../Assets/to_readme/GeradorLotomaniaPay.png';
import GeradorQuinaPayImg from '../../Assets/to_readme/GeradorQuinaPay.png';
import GeradorMegaPayImg from '../../Assets/to_readme/GeradorMegaPay.png';

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
          <div
            className="product product1"
            style={{
              backgroundImage: `url(${GeradorLotomaniaPayImg})`,
            }}
          ></div>
          <div
            className="product product2"
            style={{ backgroundImage: `url(${GeradorQuinaPayImg})` }}
          ></div>
          <div
            className="product product3"
            style={{ backgroundImage: `url(${GeradorMegaPayImg})` }}
          ></div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Produtos;
