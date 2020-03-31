const Piece = require(`./piece`);

class King extends Piece {
  possibleMoves() {
    const possiblePositions = [
      this.position.up,
      this.position.down,
      this.position.left,
      this.position.right,
      this.position.up.right,
      this.position.up.left,
      this.position.down.right,
      this.position.down.left,
    ];

    return possiblePositions.filter((position) => !position.isOutOfBounds);
  }
}

module.exports = King;