const swapi = require('swapi-node');
const filmsService = require('../services/filmsService');

// TODO error handling 
exports.index = function(req, res) {
  swapi.getFilm().then((result) => {
    const filteredResults = filmsService.filterFilmAttributes(result);
    const groupedResults = filmsService.groupFilmsBy(
      req.query.group_by,
      filteredResults
    );

    res.send(groupedResults);
  });
};

exports.characters = function(req, res) {
    res.send('NOT IMPLEMENTED: List Characters for the film with id: ' + req.params.filmSwapiId);
};
