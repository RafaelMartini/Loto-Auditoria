import React from 'react';
import '../../styles-2/produtos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from '../Menu/Menu';

function Notificacoes() {
  const notify = () =>
    toast('🍀 Conferir agora os novos jogos!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
      <>
        <Menu />
      </>
    </div>
  );
}

export default Notificacoes;
