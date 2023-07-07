import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import Header from '../Header/Header';
import '../../styles/loteriaouro.css';

const LoteriaOuro = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [selectedSets, setSelectedSets] = useState([]);
  const [betPlaced, setBetPlaced] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleNumberClick = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    } else {
      if (selectedNumbers.length < 17) {
        setSelectedNumbers([...selectedNumbers, number]);
      }
    }
  };

  const renderNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 25; i++) {
      const isSelected = selectedNumbers.includes(i);
      const numberClass = isSelected ? 'number selected' : 'number';
      numbers.push(
        <div
          key={i}
          className={numberClass}
          onClick={() => handleNumberClick(i)}
        >
          {i}
        </div>,
      );
    }
    return numbers;
  };

  const calculatePrice = (numSelected) => {
    if (numSelected === 15) {
      return 10;
    } else if (numSelected === 16) {
      return 60;
    } else if (numSelected === 17) {
      return 380;
    } else {
      return 0;
    }
  };

  const generateRandomKey = () => {
    // Gera uma chave de identificação aleatória com 12 caracteres alfanuméricos
    const characters =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let key = '';
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(
        Math.random() * characters.length,
      );
      key += characters[randomIndex];
    }
    return key;
  };

  const handleBetClick = () => {
    const numSelected = selectedNumbers.length;
    if (numSelected >= 15 && numSelected <= 17) {
      const price = calculatePrice(numSelected);
      const key = generateRandomKey();
      const newSet = {
        numbers: [...selectedNumbers].sort((a, b) => a - b),
        price: price,
        key: key,
      };
      setSelectedSets([...selectedSets, newSet]);
      setSelectedNumbers([]);
      setBetPlaced(true);
    }
  };

  const handleDeleteSet = (index) => {
    const updatedSets = [...selectedSets];
    updatedSets.splice(index, 1);
    setSelectedSets(updatedSets);
  };

  const renderSelectedNumbersTable = () => {
    if (betPlaced) {
      return (
        <table className="selected-numbers-table">
          <thead>
            <tr>
              <th>Conjunto de Números</th>
              <th>Valor</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {selectedSets.map((set, index) => (
              <tr key={index}>
                <td>{set.numbers.join(', ')}</td>
                <td>R${set.price}</td>
                <td>
                  <button
                    className="delete-set-button"
                    onClick={() => handleDeleteSet(index)}
                  >
                    <FiTrash2 /> {/* Ícone de lixeira */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                Número de Conjuntos: {selectedSets.length}
              </td>
              <td>Total: R${calculateTotal()}</td>
            </tr>
            <tr>
              <td colSpan="3">
                <button
                  className="pay-button"
                  onClick={() => setShowPopup(true)}
                >
                  PAGAR BILHETES
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      );
    } else {
      return null;
    }
  };

  const calculateTotal = () => {
    let total = 0;
    selectedSets.forEach((set) => {
      total += set.price;
    });
    return total;
  };

  return (
    <div className="loteria-ouro">
      <h2>Escolha seus números (máximo de 17):</h2>
      <div className="numbers-container">{renderNumbers()}</div>
      <p className="picked-numbers">
        Números selecionados:{' '}
        {selectedNumbers.sort((a, b) => a - b).join(', ')}
      </p>
      <p className="value">
        Valor: R${calculatePrice(selectedNumbers.length)}
      </p>
      <button className="bet-button" onClick={handleBetClick}>
        APOSTAR NESSES NÚMEROS
      </button>
      <div className="selected-numbers-table-wrapper">
        {renderSelectedNumbersTable()}
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Pagamento via Pix</h3>
            <p>Pix Chave Aleatória: 123.456.789</p>

            <p>Salve a sua chave secreta: {generateRandomKey()}</p>
            <p>Valor total a pagar: R${calculateTotal()}</p>
            <button
              className="close-button"
              onClick={() => setShowPopup(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      <Header />
    </div>
  );
};

export default LoteriaOuro;
