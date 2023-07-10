import React, { useState, useEffect } from 'react';
import '../../styles/pageGeradores.css';
import Header from '../Header/Header';

import TLotomaniaImg from '../../Assets/to_readme/TLotomania.png';

const GeradorLotomania = () => {
  const [jogos, setJogos] = useState([]);

  const gerarJogos = () => {
    const novosJogos = [];
    for (let i = 0; i < 10; i++) {
      const numeros = [];
      while (numeros.length < 20) {
        const numero = Math.floor(Math.random() * 100);
        if (!numeros.includes(numero)) {
          numeros.push(numero);
        }
      }
      numeros.sort((a, b) => a - b);
      novosJogos.push(numeros);
    }
    setJogos(novosJogos);
  };

  useEffect(() => {
    gerarJogos();
    const interval = setInterval(() => {
      gerarJogos();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="lotofacil-container">
        <h1 className="title-lotomania">
          <img
            src={TLotomaniaImg}
            alt="Lotomania"
            className="link-item-icon-jogos"
          />
        </h1>
        <h6 className="subTitle">
          Nossos números são gerados através da auditoria da loteria.
        </h6>
        <h6 className="subTitle">Terças | Quintas | Sábados</h6>
        <div className="games-container">
          {jogos.map((jogo, index) => (
            <div key={index} className="game">
              <span>Jogo {index + 1}</span>
              <div className="numbers-container">
                {jogo.map((numero, numeroIndex) => (
                  <span key={numeroIndex} className="number">
                    {numero}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Header />
    </>
  );
};

export default GeradorLotomania;
