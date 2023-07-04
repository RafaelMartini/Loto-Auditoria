import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/menu.css';
import BotaoProdutosImg from '../../Assets/to_readme/botaoProdutos.png';
import BotaoGruposImg from '../../Assets/to_readme/botaoGrupos.png';
import BotaoNotificacoesImg from '../../Assets/to_readme/botaoNotificacoes.png';

const Menu = () => {
  const Notificacoes = () => <div></div>;

  return (
    <div className="menu-container">
      <div className="menu-item">
        <Link to="/produtos" className="menu-link">
          <img
            src={BotaoProdutosImg}
            alt="botaoProdutos"
            className="botaoProdutos"
          />
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/grupos" className="menu-link">
          <img
            src={BotaoGruposImg}
            alt="botaoGrupos"
            className="botaoGrupos"
          />{' '}
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/notificacoes" className="menu-link">
          <img
            src={BotaoNotificacoesImg}
            alt="botaoNotificacoes"
            className="botaoNotificacoes"
          />
          <span className="notification-badge">
            {/* Opcional: adicione um indicador de notificação, se necessário */}
            {/* Conteúdo do componente Notificacoes */}
            <Notificacoes />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
