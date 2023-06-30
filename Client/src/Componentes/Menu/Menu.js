import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles-2/menu.css';

const Menu = () => {
  const Notificacoes = () => <div></div>;

  return (
    <div className="menu-container">
      <div className="menu-item">
        <Link to="/produtos" className="menu-link">
          Produtos
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/grupos" className="menu-link">
          Grupos
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/notificacoes" className="menu-link">
          Notificações
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
