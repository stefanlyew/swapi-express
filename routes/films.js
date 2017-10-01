var express = require('express');
var router = express.Router();

var films_controller = require('../controllers/filmsController')

router.get('/', films_controller.index)

router.get('/:filmSwapiId/characters', films_controller.characters)

module.exports = router;
