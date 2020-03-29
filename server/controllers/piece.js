const { Piece } = require(`../models`);

class PieceController {

  getPiecePossiblePositionsInTurns({ piece, position, turns }) {
    const newPiece = Piece.initialize(piece, position);
    return newPiece.getPossiblePositionsInTurns(turns).map((positions) => positions.value);
  }

}

module.exports = new PieceController();