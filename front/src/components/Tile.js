import React from 'react';
import './Tile.css';
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

const piecesHash = {
  bishop: faChessBishop,
  king: faChessKing,
  pawn: faChessPawn,
  knight: faChessKnight,
  queen: faChessQueen,
  rook: faChessRook,
}

function Tile({ line, column, onTileClicked, selectedTile, piece, turns, possiblePositions }) {
  function isWhite () {
    const columnNumber = column.charCodeAt(0) - 64;
    const lineIsEven = Number(line) % 2 === 0;

    if(lineIsEven) {
      return columnNumber % 2 === 1;
    }

    return columnNumber % 2 === 0;
  }

  function isSelected() {
    return selectedTile.line === line && selectedTile.column === column;
  }

  function selected () {
    return isSelected() ? ' selected' : '' 
  }

  function possiblePosition () {
    return possiblePositions[column + line];
  } 

  function getPieceIcon() {
    return piecesHash[piece];
  }

  return (
    <div onClick={ () => onTileClicked(line, column) } className={'Tile ' + (isWhite() ? 'Tile-White' : 'Tile-Black') + (selected())} >
      { selected() && (
        <FontAwesomeIcon className="PiecePicker-icon" size="4x" icon={getPieceIcon()} />
      )}

      { possiblePosition() && !isSelected() && (
        <FontAwesomeIcon className="PiecePicker-icon possiblePosition" size="4x" icon={getPieceIcon()} />
      )}
      
    </div>
  );
}

export default Tile;
