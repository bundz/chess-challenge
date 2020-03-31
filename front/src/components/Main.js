import React from 'react';
import './Main.css';
import Board from './Board';
import PiecePicker from './PiecePicker';
import TurnsPicker from './TurnsPicker';
import LineLabels from './LineLabels'
import ColumnLabels from './ColumnLabels'

function Main({ piece, turns }) {
  return (
    <div className="Main">
      <LineLabels />
      <Board piece={piece} turns={turns} />
      <ColumnLabels />
    </div>
  );
}

export default Main;
