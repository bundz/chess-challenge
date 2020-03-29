const { expect } = require(`chai`);
const Position = require(`./position`);
const Piece = require(`./piece`);
const Knight = require(`./knight`);

describe(`Piece Class`, () => {
  context(`when call initialize_pice with name 'kinght' and position E4`, () => {
    const piece = Piece.initialize_piece(`knight`, `E4`);
    
    it(`piece should be a knight with position value equals E4`, () => {
      expect(piece).instanceOf(Knight);
      expect(piece.position.value).to.be.equals(`E4`);
    });

  });

  context(`when call get getAllSidePositions in position A1 and side equals 'right'`, () => {
    const position = new Position(`A`, 1);
    const piece = new Piece(position);
    const array = [`B1`, `C1`, `D1`, `E1`, `F1`, `G1`, `H1`]

    it(`should return an array with length of 7 and result should be equals expect array`, () => {
      const result = piece.getAllSidePositions(`right`); 
      expect(result).to.have.lengthOf(7);

      for(let i = 0; i < result.length; i++) {
        expect(result[i].value).to.be.equals(array[i]);
      }
    });

  });

});