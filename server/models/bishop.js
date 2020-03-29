const Piece = require(`./piece`);

class Bishop extends Piece {
  possibleMoves() {
    const possiblePositions = [
      ...this.getAllSidePositions(`upRight`),
      ...this.getAllSidePositions(`upLeft`),
      ...this.getAllSidePositions(`downRight`),
      ...this.getAllSidePositions(`downLeft`),
    ];

    return possiblePositions;
  }
}

module.exports = Bishop;