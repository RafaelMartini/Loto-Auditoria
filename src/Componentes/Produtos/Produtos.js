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
          <a
            href="https://go.perfectpay.com.br/PPU38CMHQDU?UPSELL=TRUE"
            className="product product1"
            style={{
              backgroundImage: `url(${GeradorLotomaniaPayImg})`,
            }}
          >
            <img
              src={GeradorLotomaniaPayImg}
              alt="GeradorLotomaniaPay"
            />
          </a>
          <a
            href="https://go.perfectpay.com.br/PPU38CMHQEF?UPSELL=TRUE"
            className="product product2"
            style={{ backgroundImage: `url(${GeradorQuinaPayImg})` }}
          >
            <img src={GeradorQuinaPayImg} alt="GeradorQuinaPay" />
          </a>
          <a
            href="https://go.perfectpay.com.br/PPU38CMHQEP?UPSELL=TRUE"
            className="product product3"
            style={{ backgroundImage: `url(${GeradorMegaPayImg})` }}
          >
            <img src={GeradorMegaPayImg} alt="GeradorMegaPay" />
          </a>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Produtos;
