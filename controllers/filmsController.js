const charactersService = require('../services/charactersService');
const filmsService = require('../services/filmsService');

module.exports = {
  index: (req, res) => {
    filmsService.listFilms(req.query.group_by).then((films) => {
      res.send(films);
    }).catch((err) => {
      res.sendStatus(err.error);
    });
  },
  characters: (req, res) => {
    charactersService.listCharacters(req.params.filmSwapiId).then((films) => {
      res.send(films);
    }).catch((err) => {
      res.sendStatus(err.error);
    });
  },
};
