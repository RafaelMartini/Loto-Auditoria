import React, { useState, useEffect } from 'react';
import '../../styles/produtos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from '../Menu/Menu';
import '../../styles/notificacoes.css';

function Notificacoes() {
  const [notifications, setNotifications] = useState([
    'Tivemos 15 ganhadores essa semana usando o Gerador Da Quina. Venha adquirir também e aumente suas chances de ganhar!',
    'Olhe o resultado do João que fez 14 pontos utilizando nosso App nesse último concurso. Você também pode ter sucesso assim!',
    'Adquira agora o Gerador da Lotomania! Clique aqui e tenha os números mais favoráveis em suas mãos.',
    'Não perca tempo! Adquira agora o Gerador da Quina e aumente suas chances de ganhar. Clique aqui para adquirir.',
    'Quer aumentar suas chances na Mega-Sena? Adquira agora o Gerador da Mega-Sena e tenha os melhores números em suas mãos. Clique aqui para adquirir.',
    'Aposte com confiança na Lotomania! Adquira agora o Gerador da Lotomania e tenha em mãos os números mais sorteados. Clique aqui para adquirir.',
    'Não deixe a sorte escapar! Adquira agora o Gerador da Quina e descubra os números mais favoráveis. Clique aqui e adquira o seu.',
    'Mais um ganhador, parabéns à Maria! Ela acertou os Pontos da Lotomania usando nosso Gerador da Lotomania.',
    'Incrível! O Pedro foi um dos 15 ganhadores dessa semana com o uso do Gerador Da Quina. Adquira já e junte-se a ele!',
    'Veja o resultado impressionante do Lucas, que fez 14 pontos utilizando nosso App no último concurso. Venha conferir!',
    'Quer jogar com mais estratégia na Mega-Sena? Adquira agora o Gerador da Mega-Sena e tenha os melhores números em suas mãos. Clique aqui para adquirir.',
    'Adquira agora o Gerador da Lotomania e aumente suas chances de ganhar. Clique aqui e tenha acesso aos números mais favoráveis.',
    'Não perca tempo buscando os números certos! Adquira agora o Gerador da Quina e aposte com mais confiança. Clique aqui e adquira o seu.',
    'Parabéns ao Marcos por seus 14 pontos! Use nosso App e melhore suas chances de acertar os números premiados.',
    'Mais um ganhador! A Ana acertou os pontos da Lotomania usando nosso Gerador da Lotomania. Incremente suas chances também!',
    'Parabéns à Camila, que acertou os pontos da Lotomania. Ela utilizou nosso Gerador da Lotomania para escolher os números vencedores.',
    'Tivemos 15 ganhadores essa semana usando o Gerador Da Quina. Venha adquirir também e aumente suas chances de ganhar!',
    'Aumente suas chances de ganhar na Mega-Sena! Adquira agora o Gerador da Mega-Sena e tenha acesso aos melhores números para apostar.',
    'Quer apostar com mais inteligência na Lotomania? Adquira agora o Gerador da Lotomania e tenha os números mais favoráveis. Clique aqui para adquirir.',
    'Adquira agora o Gerador da Quina e aumente suas chances de ganhar. Clique aqui e tenha acesso aos números mais favoráveis.',
    'Quer aumentar suas chances na Mega-Sena? Adquira agora o Gerador da Mega-Sena e tenha acesso aos números mais favoráveis. Clique aqui e adquira o seu.',
    'A Luiza está comemorando sua vitória na Lotomania! Use nosso Gerador da Lotomania e aumente suas chances de ganhar.',
    'Incrível! O Guilherme acertou em cheio na Lotomania com a ajuda do nosso Gerador. Venha conferir os números favoráveis!',
    'Não fique de fora! Adquira agora o Gerador da Quina e aumente suas chances de ganhar. Clique aqui para adquirir.',
    'Aposte com confiança na Lotomania! Adquira agora o Gerador da Lotomania e tenha os números mais sorteados em suas mãos. Clique aqui para adquirir.',
    'Quer aumentar suas chances na Mega-Sena? Adquira agora o Gerador da Mega-Sena e tenha acesso aos números mais favoráveis. Clique aqui e adquira o seu.',
    'Adquira agora o Gerador da Lotomania e aposte com mais inteligência. Clique aqui e tenha os números mais favoráveis em suas mãos.',
    'Não perca tempo! Adquira agora o Gerador da Quina e aumente suas chances de ganhar. Clique aqui para adquirir.',
    'Aumente suas chances de ganhar na Mega-Sena! Adquira agora o Gerador da Mega-Sena e tenha acesso aos números mais favoráveis. Clique aqui para adquirir.',
    'Aposte com estratégia na Lotomania! Adquira agora o Gerador da Lotomania e tenha em mãos os números mais sorteados. Clique aqui e adquira o seu.',
    'Não deixe a sorte escapar! Adquira agora o Gerador da Quina e tenha acesso aos números mais favoráveis. Clique aqui e adquira o seu.',
    'Quer jogar com mais inteligência na Mega-Sena? Adquira agora o Gerador da Mega-Sena e tenha acesso aos melhores números para apostar. Clique aqui e adquira o seu.',
    'Adquira agora o Gerador da Lotomania e aumente suas chances de ganhar. Clique aqui e tenha os números mais favoráveis em suas mãos.',
    'Não perca tempo buscando os números certos! Adquira agora o Gerador da Quina e aposte com mais confiança. Clique aqui para adquirir.',
    'Aumente suas chances de ganhar na Mega-Sena! Adquira agora o Gerador da Mega-Sena e tenha acesso aos melhores números para apostar.',
    'Quer apostar com mais estratégia na Lotomania? Adquira agora o Gerador da Lotomania e tenha os números mais favoráveis em suas mãos. Clique aqui para adquirir.',
    'Adquira agora o Gerador da Quina e aumente suas chances de ganhar. Clique aqui e tenha acesso aos números mais favoráveis.',
    'Quer aumentar suas chances na Mega-Sena? Adquira agora o Gerador da Mega-Sena e tenha acesso aos números mais favoráveis. Clique aqui e adquira o seu.',
    'Não fique de fora! Adquira agora o Gerador da Quina e aumente suas chances de ganhar. Clique aqui para adquirir.',
    'Aposte com confiança na Lotomania! Adquira agora o Gerador da Lotomania e tenha os números mais sorteados em suas mãos. Clique aqui para adquirir.',
    'Quer aumentar suas chances na Mega-Sena? Adquira agora o Gerador da Mega-Sena e tenha acesso aos números mais favoráveis. Clique aqui e adquira o seu.',
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (notifications.length > 0) {
        const notification = notifications.shift();
        toast('🍀' + notification, {
          position: 'top-right',
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setNotifications([...notifications]); // atualiza o estado das notificações
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [notifications]);

  return (
    <div>
      <ToastContainer />
      <>
        <Menu />
      </>
    </div>
  );
}

export default Notificacoes;
