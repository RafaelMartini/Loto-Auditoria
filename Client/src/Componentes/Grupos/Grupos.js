import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import '../../styles-2/grupos.css';

import lotofacilImg from '../../Assets/to_readme/lotofacil.png';
import lotomaniaImg from '../../Assets/to_readme/lotomania.png';
import quinaImg from '../../Assets/to_readme/quina.png';
import megaImg from '../../Assets/to_readme/mega.png';

const Grupos = () => {
  return (
    <div>
      <div className="link-container">
        <Link to="/lotofacil" className="link-item">
          <img
            src={lotofacilImg}
            alt="Lotofácil"
            className="link-item-icon"
          />
          Gerador da Lotofácil
        </Link>
        <Link to="/lotomania" className="link-item">
          <img
            src={lotomaniaImg}
            alt="Lotomania"
            className="link-item-icon"
          />
          Gerador da Lotomania
        </Link>
        <Link to="/quina" className="link-item">
          <img
            src={quinaImg}
            alt="Quina"
            className="link-item-icon"
          />
          Gerador da Quina
        </Link>
        <Link to="/mega" className="link-item">
          <img src={megaImg} alt="Mega" className="link-item-icon" />
          Gerador da Mega
        </Link>
      </div>
      <Header />
    </div>
  );
};

export default Grupos;
