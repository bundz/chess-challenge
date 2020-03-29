const { expect } = require(`chai`);
const Position = require(`./position`);

describe(`Position Class`, () => {
  context(`when create a Position with value A and 2`, () => {
    const position = new Position(`A`, 2);

    it(`value should be A2`, () => {
      expect(position.value).to.be.equals(`A2`);
    });
    
    it(`should not be out of bounds`, () => {
      expect(position.isOutOfBounds).to.be.false;
    });

    it(`up should return a Position with value A3`, () => {
      expect(position.up).to.instanceOf(Position);
      expect(position.up.value).to.be.equals(`A3`);
    });

    it(`down should return a Position with value A1`, () => {
      expect(position.down).to.instanceOf(Position);
      expect(position.down.value).to.be.equals(`A1`);
    });

    it(`right should return a Position with value B2`, () => {
      expect(position.right).to.instanceOf(Position);
      expect(position.right.value).to.be.equals(`B2`);
    });

    it(`left should return a Position out of bounds`, () => {
      expect(position.left).to.instanceOf(Position);
      expect(position.left.isOutOfBounds).to.be.true;
    });

  });

});