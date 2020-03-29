const { expect } = require(`chai`);
const Position = require(`./position`);
const Rook = require(`./rook`);

describe(`Rook Class`, () => {
  context(`when create a rook in position E4`, () => {
    const position = new Position(`E`, 4);
    const rook = new Rook(position);
    const result = [
      `A4`, `B4`, `C4`,
      `D4`, `E1`, `E2`,
      `E3`, `E5`, `E6`,
      `E7`, `E8`, `F4`,
      `G4`, `H4`
    ].sort();    
    
    it(`possible moves should be an array of size 14 and should be equals result array`, () => {
      expect(rook.possibleMoves()).lengthOf(14);
      const moves = rook.possibleMoves().map((move) => move.value).sort();
      for(let i = 0; i < moves.length; i++) {
        expect(result[i]).to.be.equals(moves[i]);
      }
    });

    it(`possible move in 2 turns should be an array of size and should be equal result array`, () => {
      const result = rook.getPossiblePositionsInTurns(2).sort();
      const array = [
        `A1`, `A2`, `A3`, `A4`, `A5`, `A6`, `A7`,
        `A8`, `B1`, `B2`, `B3`, `B4`, `B5`, `B6`,
        `B7`, `B8`, `C1`, `C2`, `C3`, `C4`, `C5`,
        `C6`, `C7`, `C8`, `D1`, `D2`, `D3`, `D4`,
        `D5`, `D6`, `D7`, `D8`, `E1`, `E2`, `E3`,
        `E4`, `E5`, `E6`, `E7`, `E8`, `F1`, `F2`,
        `F3`, `F4`, `F5`, `F6`, `F7`, `F8`, `G1`,
        `G2`, `G3`, `G4`, `G5`, `G6`, `G7`, `G8`,
        `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `H7`,
        `H8`
      ].sort();

      expect(result).to.have.lengthOf(64);
      for(let i = 0; i < result.length; i++) {
        expect(result[i]).to.be.equals(array[i]);
      }
    });

  });

});