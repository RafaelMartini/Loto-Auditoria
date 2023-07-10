import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageGrupos from './Pages/PageGrupos';
import PageProdutos from './Pages/PageProdutos';
import PageNotificacoes from './Pages/PageNotificacoes';
import PageLotoFacil from './Pages/PageLotoFacil';
import PageLotoMania from './Pages/PageLotoMania';
import PageQuina from './Pages/PageQuina';
import PageMega from './Pages/PageMega';
import PageLoteriaOuro from './Pages/PageLoteriaOuro';

import './styles/app.css';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageGrupos />} />
        <>
          <Route path="/produtos" element={<PageProdutos />} />
          <Route path="/grupos" element={<PageGrupos />} />
          <Route
            path="/notificacoes"
            element={<PageNotificacoes />}
          />
        </>
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
