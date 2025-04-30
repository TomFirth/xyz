import express from "express";
import app from "../../app";
var router = express.Router();
import restaurantsRouter from './restaurants';
import menusRouter from './menus';
/* GET home page. */

router.get('/', function(req, res, next) {
  console.log(req.query);
  res.status(200).json ({ title: 'Express' });
});
router.use('/restaurants', restaurantsRouter);
router.use('/menus', menusRouter);

export default router;
