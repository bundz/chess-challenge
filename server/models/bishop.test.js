const { expect } = require(`chai`);
const Position = require(`./position`);
const Bishop = require(`./bishop`);

describe(`Bishop Class`, () => {
  context(`when create a bishop in position E4`, () => {
    const position = new Position(`E`, 4);
    const bishop = new Bishop(position);
    const result = [ `F5`, `G6`, `H7`, `D5`, `C6`, `B7`,
      `A8`, `F3`, `G2`, `H1`, `D3`, `C2`, `B1`
    ].sort();    
    
    it(`possible moves should be an array of size 13 and should be equals result array`, () => {
      expect(bishop.possibleMoves()).lengthOf(13);
      const moves = bishop.possibleMoves().map((move) => move.value).sort();
      
      for(let i = 0; i < moves.length; i++) {
        expect(result[i]).to.be.equals(moves[i]);
      }
    });
    
    
    it(`possible move in 2 turns should be an array of size and should be equal result array`, () => {
      const result = bishop.getPossiblePositionsInTurns(2).sort();
      const array = [
        `A2`, `A4`, `A6`, `A8`, `B1`,
        `B3`, `B5`, `B7`, `C2`, `C4`,
        `C6`, `C8`, `D1`, `D3`, `D5`,
        `D7`, `E2`, `E4`, `E6`, `E8`,
        `F1`, `F3`, `F5`, `F7`, `G2`,
        `G4`, `G6`, `G8`, `H1`, `H3`,
        `H5`, `H7`
      ].sort();

      expect(result).to.have.lengthOf(32);

      for(let i = 0; i < result.length; i++) {
        expect(result[i]).to.be.equals(array[i]);
      }
    });

  });


});