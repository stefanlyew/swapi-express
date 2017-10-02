const _ = require('underscore');
const swapi = require('swapi-node');

module.exports = (function () {
    return {
      listCharacters: (filmSwapiId) => {
        return new Promise(function(resolve, reject) {
          swapi.getFilm(filmSwapiId).then((result) => {
            const characterIds = result["characters"].map(_extractSwapiId);
            _getAllCharactersFromSwapi(characterIds, resolve);
          }).catch((err) => {
            reject(err);
          });
        });
      },
    };

    function _getAllCharactersFromSwapi(characterIds, resolve) {
      Promise.all(characterIds.map((id) => {
          return swapi.getPerson(id).then(function(result) {
              return result["name"];
          });
      })).then(function(results) {
        resolve(results);
      });
    }

    function _extractSwapiId(url) {
      const matches = url.match(/people\/(.*)\//);
      return matches[1];
    }
}());
