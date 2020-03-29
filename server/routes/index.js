const { Router } = require(`express`);
const route = Router();
const PieceRoutes = require(`./piece`);

route.use(`/piece`, PieceRoutes);

module.exports = route;
