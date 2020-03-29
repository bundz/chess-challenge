const { expect } = require(`chai`);
const Position = require(`./position`);
const King = require(`./king`);

describe(`King Class`, () => {
  context(`when create a king in position E4`, () => {
    const position = new Position(`E`, 4);
    const king = new King(position);
    const result = [ `D5`, `E5`, `F5`, `D3`, `E3`, `F3`, `D4`, `F4`].sort();    
    
    it(`possible moves should be an array of size 8 and should be equals result array`, () => {
      expect(king.possibleMoves()).lengthOf(8);
      const moves = king.possibleMoves().map((move) => move.value).sort();
      
      for(let i = 0; i < moves.length; i++) {
        expect(result[i]).to.be.equals(moves[i]);
      }
    });

    it(`possible move in 2 turns should be an array of size and should be equal result array`, () => {
      const result = king.getPossiblePositionsInTurns(2).sort();
      const array = [
        `C2`, `C3`, `C4`, `C5`, `C6`,
        `D2`, `D3`, `D4`, `D5`, `D6`,
        `E2`, `E3`, `E4`, `E5`, `E6`,
        `F2`, `F3`, `F4`, `F5`, `F6`,
        `G2`, `G3`, `G4`, `G5`, `G6`
      ].sort();

      expect(result).to.have.lengthOf(25);
      for(let i = 0; i < result.length; i++) {
        expect(result[i]).to.be.equals(array[i]);
      }
    });

  });

});