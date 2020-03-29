const { Router } = require(`express`);
const router = Router();
const { validationMiddleware, routeMiddleware } = require(`../../middlewares`);
const getByPiece = require(`./getByPiece`);

router.get(`/:piece`, validationMiddleware(getByPiece.schema), routeMiddleware(getByPiece.route));

module.exports = router;