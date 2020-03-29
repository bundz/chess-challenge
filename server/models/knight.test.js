const { expect } = require(`chai`);
const Position = require(`./position`);
const Knight = require(`./knight`);

describe(`Knight Class`, () => {
  context(`when create a knight in position E4`, () => {
    const position = new Position(`E`, 4);
    const knight = new Knight(position);
    const result = [ `D6`, `C5`, `C3`, `D2`, `G3`, `F2`, `G5`, `F6`].sort();    
    
    it(`possible moves should be an array of size 8 and should be equals result array`, () => {
      expect(knight.possibleMoves()).lengthOf(8);
      const moves = knight.possibleMoves().map((move) => move.value).sort();
      
      for(let i = 0; i < moves.length; i++) {
        expect(result[i]).to.be.equals(moves[i]);
      }
    });

    it(`possible move in 2 turns should be an array of size and should be equal result array`, () => {
      const result = knight.getPossiblePositionsInTurns(2).sort();
      const array = [
        `A2`, `A4`, `A6`, `B1`, `B3`,
        `B5`, `B7`, `C3`, `C4`, `C5`,
        `C8`, `D1`, `D2`, `D3`, `D5`,
        `D6`, `D7`, `E2`, `E4`, `E6`,
        `E8`, `F1`, `F2`, `F3`, `F5`,
        `F6`, `F7`, `G3`, `G4`, `G5`,
        `G8`, `H1`, `H3`, `H5`, `H7`
      ].sort();

      expect(result).to.have.lengthOf(35);
      for(let i = 0; i < result.length; i++) {
        expect(result[i]).to.be.equals(array[i]);
      }
    });

  });

});