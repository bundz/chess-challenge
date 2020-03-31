import React from 'react';
import './Main.css';
import Board from './Board';
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
