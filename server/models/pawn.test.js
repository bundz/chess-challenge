const { expect } = require(`chai`);
const Position = require(`./position`);
const Pawn = require(`./pawn`);

describe(`Pawn Class`, () => {
  context(`when create a pawn in position C3`, () => {
    const position = new Position(`C`, 3);
    const pawn = new Pawn(position);

    it(`possible moves should be an array of size 1 and should be C4`, () => {
      expect(pawn.possibleMoves()).lengthOf(1);
      expect(pawn.possibleMoves()[0].value).to.be.equals(`C4`);
    });

    it(`possible move in 2 turns should be an array of size and should be equal result array`, () => {
      const result = pawn.getPossiblePositionsInTurns(2).sort();
      const array = [`C4`, `C5`].sort();

      expect(result).to.have.lengthOf(2);
      for(let i = 0; i < result.length; i++) {
        expect(result[i]).to.be.equals(array[i]);
      }
    });

  });

});