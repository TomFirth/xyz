"use strict";

const config = require('../../config');

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const restaurants_1 = __importDefault(require("./restaurants"));
const menus_1 = __importDefault(require("./menus"));
/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req.query);
    res.status(200).json(config);
});
router.use('/restaurants', restaurants_1.default);
router.use('/menus', menus_1.default);
exports.default = router;
