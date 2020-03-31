import React, { useState } from 'react';
import './PiecePicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChessBishop, 
  faChessKing, 
  faChessPawn, 
  faChessKnight, 
  faChessQueen,
  faChessRook  
} from '@fortawesome/free-solid-svg-icons'

function PiecePicker({ piece, onPieceClicked }) {

  return (
    <div className='PiecePicker'>
      <p>Piece</p>
      <ul>
        <li onClick={() => onPieceClicked('knight')} className={"Piece " + (piece === 'knight' ? 'box-active' : '') } >
          <FontAwesomeIcon className="PiecePicker-icon" size="2x" icon={faChessKnight} />
        </li>
        <li onClick={() => onPieceClicked('king')} className={"Piece " + (piece === 'king' ? 'box-active' : '')}>
          <FontAwesomeIcon className="PiecePicker-icon" size="2x" icon={faChessKing} />
        </li>
        <li onClick={() => onPieceClicked('queen')} className={"Piece " + (piece === 'queen' ? 'box-active' : '')}>
          <FontAwesomeIcon className="PiecePicker-icon" size="2x" icon={faChessQueen} />
        </li>
        <li onClick={() => onPieceClicked('bishop')} className={"Piece " + (piece === 'bishop' ? 'box-active' : '')}>
          <FontAwesomeIcon className="PiecePicker-icon" size="2x" icon={faChessBishop} />
        </li>
        <li onClick={() => onPieceClicked('rook')} className={"Piece " + (piece === 'rook' ? 'box-active' : '')}>
          <FontAwesomeIcon className="PiecePicker-icon" size="2x" icon={faChessRook} />
        </li>
        <li onClick={() => onPieceClicked('pawn')} className={"Piece " + (piece === 'pawn' ? 'box-active' : '')}>
          <FontAwesomeIcon className="PiecePicker-icon" size="2x" icon={faChessPawn} />
        </li>
      </ul>
    </div>
  );
}

export default PiecePicker;
