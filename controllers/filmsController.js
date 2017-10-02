const charactersService = require('../services/charactersService');
const filmsService = require('../services/filmsService');

// TODO error handling 
module.exports = {
  index: (req, res) => {
    filmsService.listFilms(req.query.group_by).then((films) => {
      res.send(films);
    });
  },
  characters: (req, res) => {
    charactersService.listCharacters(req.params.filmSwapiId).then((films) => {
      res.send(films);
    });
  }
}
