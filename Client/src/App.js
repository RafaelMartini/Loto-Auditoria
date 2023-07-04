import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Grupos from './Componentes/Grupos/Grupos';
import Login from './Pages/Login';
import Produtos from './Componentes/Produtos/Produtos';
import Notificacoes from './Componentes/Notificacoes/Notificacoes';
import Cadastro from './Pages/Cadastro';
import PageLotoFacil from './Pages/PageLotoFacil';
import PageLotoMania from './Pages/PageLotoMania';
import PageQuina from './Pages/PageQuina';
import PageMega from './Pages/PageMega';
import PageLoteriaOuro from './Pages/PageLoteriaOuro';

import './styles/app.css';

const logado = localStorage.getItem('@user');

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        {logado ? (
          <Route path="/" element={<Grupos />} />
        ) : (
          <>
            <Route path="/" element={<Login logado={logado} />} />
            <Route
              path="/cadastro"
              element={<Cadastro logado={logado} />}
            />
          </>
        )}
        {logado && <Route path="/produtos" element={<Produtos />} />}
        {logado && <Route path="/grupos" element={<Grupos />} />}
        {logado && (
          <Route path="/notificacoes" element={<Notificacoes />} />
        )}
        <Route path="/lotofacil" element={<PageLotoFacil />} />
        <Route path="/lotomania" element={<PageLotoMania />} />
        <Route path="/quina" element={<PageQuina />} />
        <Route path="/mega" element={<PageMega />} />
        <Route path="/loteriaouro" element={<PageLoteriaOuro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
