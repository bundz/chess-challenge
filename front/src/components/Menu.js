import React from 'react';
import './Menu.css';
import Board from './Board';
import PiecePicker from './PiecePicker';
import TurnsPicker from './TurnsPicker';
import LineLabels from './LineLabels'
import ColumnLabels from './ColumnLabels'

function Menu({ piece, turns, onPieceClicked, onTurnsClicked }) {
  return (
    <div className="Main">
      <PiecePicker piece={piece} onPieceClicked={onPieceClicked} />
      <TurnsPicker turns={turns} onTurnsClicked={onTurnsClicked} />
    </div>
  );
}

export default Menu;
