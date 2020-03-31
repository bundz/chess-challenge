const { Piece } = require(`../models`);

class PieceController {

  getPiecePossiblePositionsInTurns({ piece, position, turns }) {
    const newPiece = Piece.initialize_piece(piece, position);
    return newPiece.getPossiblePositionsInTurns(turns);
  }

}

module.exports = new PieceController();