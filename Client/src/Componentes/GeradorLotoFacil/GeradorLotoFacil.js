import React, { useState, useEffect } from 'react';
import '../../styles/pageGeradores.css';
import Header from '../Header/Header';

import TLotofacilImg from '../../Assets/to_readme/TLotofacil.png';

const GeradorLotofacil = () => {
  const [jogos, setJogos] = useState([]);

  const gerarNumeros = () => {
    const novosJogos = [];
    for (let i = 0; i < 10; i++) {
      const numeros = [];
      while (numeros.length < 15) {
        const numero = Math.floor(Math.random() * 25) + 1;
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
    const interval = setInterval(() => {
      gerarNumeros();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [visibleNumbers, setVisibleNumbers] = useState([]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (jogos.length > 0) {
        setVisibleNumbers(jogos[0].slice(0, index + 1));
        index++;
        if (index >= jogos[0].length) {
          clearInterval(timer);
        }
      }
    }, 3000 / jogos[0]?.length);

    return () => {
      clearInterval(timer);
    };
  }, [jogos]);

  return (
    <>
      <div className="lotofacil-container">
        <h1 className="title">
          <img
            src={TLotofacilImg}
            alt="Lotofácil"
            className="link-item-icon"
          />
        </h1>

        <h6 className="subTitle">
          Nossos números são gerados através da auditoria da loteria.
        </h6>
        <h6 className="subTitle">Segundas | Quartas | Sextas</h6>
        <div className="games-container">
          {jogos.map((jogo, index) => (
            <div key={index} className="game">
              <span>Jogo {index + 1}</span>
              <div className="numbers-container">
                {visibleNumbers.map((numero, index) => (
                  <span key={index} className="number">
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

export default GeradorLotofacil;
