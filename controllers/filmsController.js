const swapi = require('swapi-node');

// TODO filter out only the data we need 
// TODO groupBy directors
// TODO error handling 
exports.index = function(req, res) {
  swapi.getFilm().then((result) => {
    res.send(result);
  });
};

exports.characters = function(req, res) {
    res.send('NOT IMPLEMENTED: List Characters for the film with id: ' + req.params.filmSwapiId);
};
