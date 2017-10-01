var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('List all films, group by director');
})

router.get('/:filmSwapiId/characters', function (req, res) {
  res.send(req.params);
})

module.exports = router;
