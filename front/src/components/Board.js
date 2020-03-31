import React, { useState } from 'react';
import './Board.css';
import Line from './Line';
import Api from '../utils/Api'

function Board({piece, turns }) {
  const [state, setState] = useState({ line: '', column: '', possiblePositions: {} });

  async function onTileClicked(line, column) {
    const positions = await Api.getPossiblePositions(piece, column + line, turns);
    const possiblePositions = getPossiblePositions(positions)
    setState({ line, column, possiblePositions });
  }

  function getPossiblePositions(positions) {
    const possiblePositions = {};

    positions.forEach((position) => {
      possiblePositions[position] = true;
    });

    return possiblePositions
  }

  return (
    <div className='Board'>
      <Line piece={piece} turns={turns} number='8' onTileClicked={onTileClicked} selectedTile={state} possiblePositions={state.possiblePositions} />
      <Line piece={piece} turns={turns} number='7' onTileClicked={onTileClicked} selectedTile={state} possiblePositions={state.possiblePositions} />
      <Line piece={piece} turns={turns} number='6' onTileClicked={onTileClicked} selectedTile={state} possiblePositions={state.possiblePositions} />
      <Line piece={piece} turns={turns} number='5' onTileClicked={onTileClicked} selectedTile={state} possiblePositions={state.possiblePositions} />
      <Line piece={piece} turns={turns} number='4' onTileClicked={onTileClicked} selectedTile={state} possiblePositions={state.possiblePositions} />
      <Line piece={piece} turns={turns} number='3' onTileClicked={onTileClicked} selectedTile={state} possiblePositions={state.possiblePositions} />
      <Line piece={piece} turns={turns} number='2' onTileClicked={onTileClicked} selectedTile={state} possiblePositions={state.possiblePositions} />
      <Line piece={piece} turns={turns} number='1' onTileClicked={onTileClicked} selectedTile={state} possiblePositions={state.possiblePositions} />
    </div>
  );
}

export default Board;
