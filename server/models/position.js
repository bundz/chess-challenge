class Position {
  constructor (column, line) {
    this.column = column;
    this.line = line;
    this.value = `${this.column}${this.line}`;
    this.isOutOfBounds = false;

    if(!RegExp(/^[A-H][1-8]$/).test(this.value)) {
      this.isOutOfBounds = true;
      this.value = null;
    }
  } 

  get up() {
    return new Position(this.column, this.line + 1);
  }

  get left() {
    const newColumn = String.fromCharCode(this.column.charCodeAt(0) - 1);
    return new Position(newColumn, this.line);
  }
  
  get down() {
    return new Position(this.column, this.line - 1);
  }

  get right() {
    const newColumn = String.fromCharCode(this.column.charCodeAt(0) + 1);
    return new Position(newColumn, this.line);
  }

  get upRight() {
    return this.up.right;
  }

  get upLeft() {
    return this.up.left;
  }

  get downRight() {
    return this.down.right;
  }

  get downLeft() {
    return this.down.left;
  }
}

module.exports = Position;
