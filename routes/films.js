const express = require('express');
const filmsController = require('../controllers/filmsController');

const router = express.Router();

router.get('/', filmsController.index);
router.get('/:filmSwapiId/characters', filmsController.characters);

module.exports = router;
