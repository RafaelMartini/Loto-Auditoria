import React, { useState, useEffect } from 'react';
import '../../styles/pageGeradores.css';
import Header from '../Header/Header';

import TQuinaImg from '../../Assets/to_readme/TQuina.png';

const GeradorQuina = () => {
  const [jogos, setJogos] = useState([]);

  const gerarJogos = () => {
    const novosJogos = [];
    for (let i = 0; i < 10; i++) {
      const numeros = [];
      while (numeros.length < 5) {
        const numero = Math.floor(Math.random() * 80) + 1;
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
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="lotofacil-container">
        <h1 className="title">
          <img
            src={TQuinaImg}
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

export default GeradorQuina;
