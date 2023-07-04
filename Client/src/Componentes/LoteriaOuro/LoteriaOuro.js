import React, { useState } from 'react';
import Header from '../Header/Header';
import '../../styles/loteriaouro.css';

const LoteriaOuro = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [betPlaced, setBetPlaced] = useState(false);

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

  const calculatePrice = () => {
    const numSelected = selectedNumbers.length;
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

  const handleBetClick = () => {
    setBetPlaced(true);
  };

  const renderSelectedNumbersTable = () => {
    if (betPlaced) {
      const selectedSets = [];
      const numSets = Math.floor(selectedNumbers.length / 15);
      for (let i = 0; i < numSets; i++) {
        const startIndex = i * 15;
        const endIndex = startIndex + 15;
        const setNumbers = selectedNumbers.slice(
          startIndex,
          endIndex,
        );
        selectedSets.push(setNumbers);
      }

      return (
        <table className="selected-numbers-table">
          <thead>
            <tr>
              <th>Conjunto de Números</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {selectedSets.map((set, index) => (
              <tr key={index}>
                <td>{set.join(', ')}</td>
                <td>R$10</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="loteria-ouro">
      <h2>Escolha seus números (máximo de 17):</h2>
      <div className="numbers-container">{renderNumbers()}</div>
      <p className="picked-numbers">
        Números selecionados: {selectedNumbers.join(', ')}
      </p>
      <p className="value">Valor: R${calculatePrice()}</p>
      <button className="bet-button" onClick={handleBetClick}>
        APOSTAR NESSES NÚMEROS
      </button>
      {renderSelectedNumbersTable()}
      <Header />
    </div>
  );
};

export default LoteriaOuro;
