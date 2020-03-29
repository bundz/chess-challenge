const Piece = require(`./piece`);

class Pawn extends Piece {
  possibleMoves() {
    return [this.position.up].filter((position) => !position.isOutOfBounds);
  }
}

module.exports = Pawn;