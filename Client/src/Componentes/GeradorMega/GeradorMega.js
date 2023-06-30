import React, { useState } from 'react';
import Header from '../Header/Header';

const GeradorMega = () => {
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

  return (
    <>
      <div className="lotofacil-container">
        <h1 className="title">APP DA MEGA</h1>
        <h6 className="title">
          NOSSO APP DESCOBRE OS PRÓXIMOS SORTEIOS DA LOTOFÁCIL
          UTILIZANDO UMA TECNOLOGIA DE BANCO DE DADOS INTERLIGADA AO
          SISTEMA DAS LOTERIAS.
        </h6>
        <div className="button-container">
          <button className="generate-button" onClick={gerarNumeros}>
            DESCOBRIR AGORA!
          </button>
        </div>
        <div className="games-container">
          {jogos.map((jogo, index) => (
            <div key={index} className="game">
              <span>Jogo {index + 1}</span>
              <div className="numbers-container">
                {jogo.map((numero, index) => (
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

export default GeradorMega;
