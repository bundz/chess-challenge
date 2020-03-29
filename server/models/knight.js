const Piece = require(`./piece`);

class Knight extends Piece {
  possibleMoves() {
    const possiblePositions = [
      this.position.up.up.right,
      this.position.up.up.left,
      this.position.down.down.right,
      this.position.down.down.left,
      this.position.right.right.up,
      this.position.right.right.down,
      this.position.left.left.up,
      this.position.left.left.down,
    ];

    return possiblePositions.filter((position) => !position.isOutOfBounds);
  }
}

module.exports = Knight;