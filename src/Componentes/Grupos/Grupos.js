import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import '../../styles/grupos.css';

import lotofacilImg from '../../Assets/to_readme/lotofacil.png';
import lotomaniaImg from '../../Assets/to_readme/lotomania.png';
import quinaImg from '../../Assets/to_readme/quina.png';
import megaImg from '../../Assets/to_readme/mega.png';
import TGruposImg from '../../Assets/to_readme/grupos.png';
import loteriaOuroImg from '../../Assets/to_readme/lotoOuro.png';

const Grupos = () => {
  return (
    <div>
      <div className="link-container">
        <img
          src={TGruposImg}
          alt="LogoGrupos"
          className="LogoGrupos"
        />
        <Link to="/lotofacil" className="link-item">
          <img
            src={lotofacilImg}
            alt="Lotofácil"
            className="link-item-icon-jogos"
          />
          GERADOR DA LOTOFÁCIL
        </Link>
        <Link to="/lotomania" className="link-item">
          <img
            src={lotomaniaImg}
            alt="Lotomania"
            className="link-item-icon-jogos"
          />
          GERADOR DA LOTOMANIA
        </Link>
        <Link to="/quina" className="link-item">
          <img
            src={quinaImg}
            alt="Quina"
            className="link-item-icon-jogos"
          />
          GERADOR DA QUINA
        </Link>
        <Link to="/mega" className="link-item">
          <img
            src={megaImg}
            alt="Mega"
            className="link-item-icon-jogos"
          />
          GERADOR DA MEGA
        </Link>
        <Link to="/loteriaouro" className="link-item">
          <img
            src={loteriaOuroImg}
            alt="loteriaouro"
            className="link-item-icon-jogos"
          />
          LOTERIA OURO
        </Link>
      </div>
      <Header />
    </div>
  );
};

export default Grupos;
