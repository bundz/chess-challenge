
const Position = require(`./position`);

class Piece {

  constructor(position) {
    this.position = position;
  }

  static get pieceModels() {
    return {
      bishop: require(`./bishop`),
      king: require(`./king`),
      knight: require(`./knight`),
      pawn: require(`./pawn`),
      queen: require(`./queen`),
      rook: require(`./rook`),
    };
  }

  static initialize_piece(name, positionNotation) {
    const [column, line] = positionNotation.split(``);
    const position = new Position(column, Number(line));
    const model = this.pieceModels[name];
    return new model(position, name);
  }

  getAllSidePositions (side) {
    const positions = [];
    let newPosition = this.position[side];

    while(!newPosition.isOutOfBounds) {
      positions.push(newPosition);
      newPosition = newPosition[side];
    }

    return positions;
  }

  getPossiblePositionsInTurns(turns, result={}) {
    if(turns < 1) {
      return;
    }

    const name = this.constructor.name.toLowerCase();
    const positions = this.possibleMoves();

    for(const newPosition of positions) {
      let piece = Piece.initialize_piece(name, newPosition.value);
      result[newPosition.value] = true;
      piece.getPossiblePositionsInTurns(turns - 1, result);
    }

    return Object.keys(result);
  }
}

module.exports = Piece;