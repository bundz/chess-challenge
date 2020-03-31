import React from "react";
import Tile from "./Tile";
import "./Line.css";

function Line({ number, onTileClicked, selectedTile, piece, turns, possiblePositions }) {
  return (
    <div className="Line">
      <Tile piece={piece} turns={turns} column="A" line={number} onTileClicked={onTileClicked} selectedTile={selectedTile} possiblePositions={possiblePositions} />
      <Tile piece={piece} turns={turns} column="B" line={number} onTileClicked={onTileClicked} selectedTile={selectedTile} possiblePositions={possiblePositions} />
      <Tile piece={piece} turns={turns} column="C" line={number} onTileClicked={onTileClicked} selectedTile={selectedTile} possiblePositions={possiblePositions} />
      <Tile piece={piece} turns={turns} column="D" line={number} onTileClicked={onTileClicked} selectedTile={selectedTile} possiblePositions={possiblePositions} />
      <Tile piece={piece} turns={turns} column="E" line={number} onTileClicked={onTileClicked} selectedTile={selectedTile} possiblePositions={possiblePositions} />
      <Tile piece={piece} turns={turns} column="F" line={number} onTileClicked={onTileClicked} selectedTile={selectedTile} possiblePositions={possiblePositions} />
      <Tile piece={piece} turns={turns} column="G" line={number} onTileClicked={onTileClicked} selectedTile={selectedTile} possiblePositions={possiblePositions} />
      <Tile piece={piece} turns={turns} column="H" line={number} onTileClicked={onTileClicked} selectedTile={selectedTile} possiblePositions={possiblePositions} />
    </div>
  );
}

export default Line;
