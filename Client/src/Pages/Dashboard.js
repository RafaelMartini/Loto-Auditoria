import React, { useState } from 'react';

import '../styles/dashboard.css';
import Header from '../Componentes/Header/Header';

function HomePage() {
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
        <h1 className="title">APP DA LOTOFÁCIL</h1>
        <h6 className="title">
          NOSSO APP DESCOBRE OS PRÓXIMOS SORTEIOS DA LOTOFÁCIL
          ULTILIZANDO UMA TÉCNOLOGIA DE BANCO DE DADOS INTERLIGADA AO
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
                    {index > 0}
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
}

export default HomePage;
