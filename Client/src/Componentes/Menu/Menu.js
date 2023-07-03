import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/menu.css';

const Menu = () => {
  const Notificacoes = () => <div></div>;

  return (
    <div className="menu-container">
      <div className="menu-item">
        <Link to="/produtos" className="menu-link">
          PRODUTOS
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/grupos" className="menu-link">
          GRUPOS
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/notificacoes" className="menu-link">
          NOTIFICAÇÕES
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
