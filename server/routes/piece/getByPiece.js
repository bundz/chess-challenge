const Joi = require(`joi`);
const { PieceController } = require(`../../controllers`)

const schema = Joi.object({
  query: Joi.object({
    position: Joi.string().regex(/^[A-H][1-8]$/).default(`A1`),
    turns: Joi.number().integer().positive().default(2)
  }),
  params: Joi.object({
    piece: Joi.string().valid([`king`, `queen`, `rook`, `bishop`, `knight`, `pawn`]).required()
  })
});

const route = ({ params, query }, res) => {
  const result = PieceController.getPiecePossiblePositionsInTurns({ piece: params.piece, turns: query.turns, position: query.position })
  res.reply(result);
};

module.exports = {
  schema,
  route
};

