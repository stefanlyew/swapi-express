const filmsService = require('../services/filmsService');

// TODO error handling 
module.exports = {
  index: (req, res) => {
    filmsService.listFilms(req.query.group_by).then((films) => {
      res.send(films);
    });
  },
  characters: (req, res) => {
      res.send('NOT IMPLEMENTED: List Characters for the film with id: ' + req.params.filmSwapiId);
  }
}
