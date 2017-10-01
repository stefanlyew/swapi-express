const swapi = require('swapi-node');
const filmsService = require('../services/filmsService');

// TODO error handling 
module.exports = {
  index: (req, res) => {
    swapi.getFilm().then((result) => {
      const filteredResults = filmsService.filterFilmAttributes(result);
      const groupedResults = filmsService.groupFilmsBy(
        req.query.group_by,
        filteredResults
      );

      res.send(groupedResults);
    });
  },
  characters: (req, res) => {
      res.send('NOT IMPLEMENTED: List Characters for the film with id: ' + req.params.filmSwapiId);
  }
}
