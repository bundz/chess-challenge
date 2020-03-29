const Piece = require(`./piece`);

class Queen extends Piece {
  possibleMoves() {
    const possiblePositions = [
      ...this.getAllSidePositions(`up`),
      ...this.getAllSidePositions(`down`),
      ...this.getAllSidePositions(`left`),
      ...this.getAllSidePositions(`right`),
      ...this.getAllSidePositions(`upRight`),
      ...this.getAllSidePositions(`upLeft`),
      ...this.getAllSidePositions(`downRight`),
      ...this.getAllSidePositions(`downLeft`),
    ]

    return possiblePositions;
  }
}

module.exports = Queen;