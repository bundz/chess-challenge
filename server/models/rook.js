const Piece = require(`./piece`);

class Rook extends Piece {
  possibleMoves() {
    const possiblePositions = [
      ...this.getAllSidePositions(`up`),
      ...this.getAllSidePositions(`down`),
      ...this.getAllSidePositions(`left`),
      ...this.getAllSidePositions(`right`),
    ];
    
    return possiblePositions;
  }
}

module.exports = Rook; 